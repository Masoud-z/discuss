import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { ReactNode } from "react";
import * as action from "@/actions";
import { auth } from "@/auth";

const HeaderAuth = async () => {
  const session = await auth();
  let authContent: ReactNode | ReactNode[];
  if (session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar
            className="hover:cursor-pointer"
            src={session.user.image || ""}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={action.signOut}>
              <Button color="danger" type="submit">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={action.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={action.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
};

export default HeaderAuth;
