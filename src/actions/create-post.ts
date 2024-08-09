"use server";

import { auth } from "@/auth";
import { Post } from "@prisma/client";
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

  let post: Post;

  try {
    // post = await db.post.create({ data: {} });
  } catch (error) {}

  //   revalidatePath(paths.topicShow());

  return { errors: {} };

  // TODO revalidate topic show page
}
