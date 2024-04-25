import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface Props {
  children: ReactNode;
}

const FormSubmitBtn = ({ children }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
};

export default FormSubmitBtn;
