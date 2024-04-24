import { auth } from "@/auth";
import paths from "@/core/routes";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./HeaderAuth";

const Header = async () => {
  const session = await auth();

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={paths.home} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
