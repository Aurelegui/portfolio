import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/modeToggle";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="px-6 py-4">
          <ul className="flex justify-between items-center">
            <li>
              <Logo />
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
