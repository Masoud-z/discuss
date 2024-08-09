"use client";

import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface Props {
  children: ReactNode;
}

const FormButton = ({ children }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
};

export default FormButton;
