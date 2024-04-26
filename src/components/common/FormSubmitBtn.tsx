import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface Props {
  title?: string;
}

const FormSubmitBtn = ({ title = "Submit" }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {title}
    </Button>
  );
};

export default FormSubmitBtn;
