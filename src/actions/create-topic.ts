"use server";

import { z } from "zod";
import { paths } from "@/core/constants/routes";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { Topic } from "@prisma/client";
import { db } from "@/db";
import { redirect } from "next/navigation";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopiFormState {
  errors: {
    name?: string[];
    description?: string[];
    _formError?: string[];
  };
}

export async function createTopic(
  formStatus: CreateTopiFormState,
  formData: FormData
): Promise<CreateTopiFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: { _formError: ["You must be signed in to create a topic!"] },
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: { slug: result.data.name, description: result.data.name },
    });
  } catch (error) {
    if (error instanceof Error) {
      return { errors: { _formError: [error.message] } };
    } else {
      return { errors: { _formError: ["Something went wrong!"] } };
    }
  }

  revalidatePath(paths.home);
  redirect(paths.topicShow(topic.slug));
  return { errors: {} };
}
