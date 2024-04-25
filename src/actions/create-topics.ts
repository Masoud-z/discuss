"use server";

import paths from "@/core/routes";
import { db } from "@/db";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface FormErrorMessage {
  errors: { name?: string[]; description?: string[]; _form?: string[] };
}

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 character!" })
    .regex(/^[a-z-]+$/, {
      message: "Name must be lowercase letter or dashes without spaces",
    }),
  description: z
    .string()
    .min(10, { message: "Description should be at least 10 character!" }),
});

export async function createTopic(
  formState: FormErrorMessage,
  formData: FormData
): Promise<FormErrorMessage> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    }
    return { errors: { _form: ["Some thing went wrong!"] } };
  }

  revalidatePath(paths.home);
  redirect(paths.topicShow(topic.slug));
}
