"use client";
import { signIn, signOut } from "@/actions";
import {
  Avatar,
  NavbarItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();

  if (session.status === "loading") return null;

  return session?.data?.user ? (
    <Popover placement="left">
      <PopoverTrigger>
        <Avatar
          src={session.data.user.image || ""}
          className="hover:cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <Button
            onClick={() =>
              signOut().then(() => {
                window.location.reload();
              })
            }
          >
            Sign Out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <>
      <NavbarItem>
        <form action={signIn}>
          <Button type="submit" color="secondary" variant="bordered">
            Sign In
          </Button>
        </form>
      </NavbarItem>

      <NavbarItem>
        <form action={signIn}>
          <Button type="submit" color="primary" variant="flat">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    </>
  );
};

export default HeaderAuth;
