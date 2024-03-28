import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="">
      <a
        className="pointer-events-none flex place-items-center gap-3"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/Logo-AG-WHITE.svg"}
          alt="Aurele Guitard Logo"
          className="dark:invert"
          width={80}
          height={24}
          priority
        />
      </a>
    </div>
  );
};

export default Logo;
