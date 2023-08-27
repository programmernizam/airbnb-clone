"use client";

import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        className="hidden md:block cursor-pointer"
        alt="Logo"
        height={100}
        width={100}
        src="/images/logo.png"
      />
    </div>
  );
}

export default Logo;
