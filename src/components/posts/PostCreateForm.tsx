"use client";
import { Input, Textarea } from "@nextui-org/react";
import FormSubmitBtn from "../common/FormSubmitBtn";
import FormError from "../common/FormError";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

interface Props {
  slug: string;
}

const PostCreateForm = ({ slug }: Props) => {
  const [formState, action] = useFormState(actions.createPost.bind(null,slug), { errors: {} });
  return (
    <form action={action} className="flex flex-col gap-4 p-4 w-80">
      <Input
        isInvalid={!!formState.errors.title}
        errorMessage={formState.errors.title?.join(", ")}
        name="title"
        label="Title"
        placeholder="Title"
        labelPlacement="outside"
      />
      <Textarea
        isInvalid={!!formState.errors.title}
        errorMessage={formState.errors.title?.join(", ")}
        name="content"
        label="Content"
        placeholder="Content"
        labelPlacement="outside"
      />
      <FormError message={formState.errors._form} />
      <FormSubmitBtn />
    </form>
  );
};

export default PostCreateForm;
