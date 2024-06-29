import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* logo */}
        <Link href="/">
          <Image
            src="/Instagram_logo_black.webp"
            width={96}
            height={96}
            alt="logo"
            className="hidden lg:inline-block"
          />
        </Link>
        <Link href="/">
          <Image
            src="/800px-Instagram_logo_2016.webp"
            width={40}
            height={40}
            alt="logo"
            className="lg:hidden sm:inline-block"
          />
        </Link>
        {/* search input */}
        <input
          type="text"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
          placeholder="Search..."
        />
        {/* menu item */}
        <button className="text-sm font-semibold text-blue-500"></button>
      </div>
    </div>
  );
};

export default Header;
