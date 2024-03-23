import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <a
        className="pointer-events-none flex place-items-center gap-3"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/vercel.svg"}
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>
    </div>
  );
};

export default Logo;
