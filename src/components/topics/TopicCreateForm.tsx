"use client";
import { Input, Textarea } from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormSubmitBtn from "../common/FormSubmitBtn";
import FormError from "../common/FormError";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(actions.createTopic, { errors: {} });
  return (
    <form action={action}>
      <div className="flex flex-col gap-4 p-4 w-80">
        <h3 className="text-lg">Create a Topic!</h3>
        <Input
          name="name"
          type="text"
          label="Name"
          labelPlacement="outside"
          placeholder="Name"
          isInvalid={!!formState.errors.name}
          errorMessage={formState.errors.name?.join(", ")}
        />
        <Textarea
          name="description"
          label="Description"
          labelPlacement="outside"
          placeholder="Describe your topic!"
          isInvalid={!!formState.errors.description}
          errorMessage={formState.errors.description?.join(", ")}
        />

        <FormError message={formState.errors._form} />

        <FormSubmitBtn />
      </div>
    </form>
  );
};

export default TopicCreateForm;
