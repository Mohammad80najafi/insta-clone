"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiCamera } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);

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

        {session ? (
          <div className="flex gap-2 items-center">
            <IoMdAddCircleOutline
              className="text-2xl cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-600"
              onClick={() => setIsOpen(true)}
            />
            <Image
              src={session.user.image}
              alt="user-image"
              width={32}
              height={32}
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={() => signOut()}
            />
          </div>
        ) : (
          <button
            onClick={() => signIn("github")}
            className="text-sm font-semibold text-blue-500"
          >
            Log in
          </button>
        )}
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 shadow-md"
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <HiCamera className="text-5xl text-gray-400 cursor-pointer" />
          </div>
          <input
            type="text"
            maxLength="150"
            placeholder="Please enter yout caption..."
            className="m-4 border-none text-center w-full focus:ring-0 mx-auto outline-none"
          />
          <button className="w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200  disabled:cursor-not-allowed disabled:hover:brightness-100">
            Upload Post
          </button>
          <AiOutlineClose
            className="cursor-pointer absolute top-2 right-2 hover:text-red-600 transition"
            onClick={() => setIsOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Header;
