"use server";

import { auth } from "@/auth";
import { paths } from "@/core/constants/routes";
import { db } from "@/db";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _formError?: string[];
  };
}

const createPostSchema = z.object({
  title: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  content: z.string().min(10),
});

export async function createPost(
  topicId: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: { _formError: ["You must be signed in to create a post!"] },
    };
  }

  const topic = await db.topic.findFirst({ where: { id: topicId } });

  if (!topic) {
    return { errors: { _formError: ["Could not find the topic!"] } };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        topicId: topic.id,
        userId: session.user.id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return { errors: { _formError: [error.message] } };
    } else {
      return { errors: { _formError: ["Something went wrong!"] } };
    }
  }

  revalidatePath(paths.topicShow(topic.id));
  redirect(paths.postShow(topic.id, post.id));

  return { errors: {} };
}
