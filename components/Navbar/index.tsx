import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/modeToggle";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex justify-between">
            <li>
              <Logo />
            </li>
            <li>
              <Link href={"/"}>Hello</Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
