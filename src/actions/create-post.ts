"use server";

import { auth } from "@/auth";
import paths from "@/core/routes";
import { db } from "@/db";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

const createPostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 character!" }),
  content: z
    .string()
    .min(10, { message: "Content should be at least 10 character!" }),
});
export async function createPost(
  slug: string,
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
    return { errors: { _form: ["You should sign in to do this!"] } };
  }

  const topic = await db.topic.findFirst({ where: { slug } });

  if (!topic) {
    return { errors: { _form: ["Can not find the topic!"] } };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    } else {
      return { errors: { _form: ["Something went wrong!"] } };
    }
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));

  return { errors: {} };
  //TODO revalidate the topic show page
}
