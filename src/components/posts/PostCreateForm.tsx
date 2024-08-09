"use client";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  Input,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../common/FormButton";
import { useFormState } from "react-dom";
import { createPost } from "@/actions";

interface Props {
  slug: string;
}

const PostCreateForm = ({ slug }: Props) => {
  const [formState, action] = useFormState(createPost, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors?.title}
              errorMessage={formState.errors?.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors?.content}
              errorMessage={formState.errors?.content?.join(", ")}
            />
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
