import {
  Button,
  ButtonVariantProps,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverProps,
} from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  popoverPlacement?: PopoverProps["placement"];
  btnTitle: string;
  btnColor?: ButtonVariantProps["color"];
  popoverContent: ReactNode;
}

const CommonPopover = ({
  popoverPlacement = "left",
  btnTitle,
  btnColor = "primary",
  popoverContent,
}: Props) => {
  return (
    <Popover placement={popoverPlacement}>
      <PopoverTrigger>
        <Button color={btnColor}>{btnTitle}</Button>
      </PopoverTrigger>
      <PopoverContent>{popoverContent}</PopoverContent>
    </Popover>
  );
};

export default CommonPopover;
