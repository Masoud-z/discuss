import { auth } from "@/auth";
import FormError from "./FormError";
import { ReactNode } from "react";

interface Props {
  content: ReactNode;
  message?: string[];
}

const UseLoggingCheck = async ({
  content,
  message = ["You must log in to create"],
}: Props) => {
  const session = await auth();
  return (
    <> {session && session.user ? content : <FormError message={message} />}</>
  );
};

export default UseLoggingCheck;
