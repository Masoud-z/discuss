import { auth } from "@/auth";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import TopicCreateForm from "./TopicCreateForm";

const TopicCreatePopover = async () => {
  const session = await auth();
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        {session && session.user ? (
          <TopicCreateForm />
        ) : (
          <div className="error-container">
            You must log in to create a topic!
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreatePopover;
