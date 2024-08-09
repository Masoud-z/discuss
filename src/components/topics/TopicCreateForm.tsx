"use client";
import { createTopic } from "@/actions";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../common/FormButton";

const TopicCreateForm = () => {
  const [formState, action] = useFormState(createTopic, { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
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
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            {formState.errors._formError ? (
              <div className="border border-red-400 border-solid bg-red-200 font-bold rounded p-2">
                {formState.errors._formError.join(", ")}
              </div>
            ) : (
              <></>
            )}
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;
