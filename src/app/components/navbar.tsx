"use client";

import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { monoton } from "@/app/ui/fonts";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed w-full h-20 shadow-xl bg-gray-900">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="flex h-full items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="cursor-pointer relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            />
          </Link>
          <Link href="/">
            <h1
              className={`${monoton.className} text-xl md:text-4xl md:leading-normal text-newa-green`}
            >
              kino newa
            </h1>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">
                O Kinie
              </li>
            </Link>
          </ul>
          <ul className="hidden sm:flex">
            <Link href="/news">
              <li className="ml-10 uppercase hover:bg-newa-green text-xl">
                Aktualności
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
