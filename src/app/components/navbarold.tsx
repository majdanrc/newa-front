"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { monoton } from "@/app/ui/fonts";

const NavbarOld = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      capt: "o kinie",
      link: "",
    },
    {
      id: 2,
      capt: "premiery",
      link: "new-releases",
    },
    {
      id: 3,
      capt: "zapowiedzi",
      link: "upcoming",
    },
    {
      id: 4,
      capt: "repertuar",
      link: "repertoire",
    },
    {
      id: 5,
      capt: "kontakt",
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray-800 sticky nav">
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

      <ul className="hidden md:flex">
        {links.map(({ id, capt, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-newa-green duration-200 link-underline hover:bg-newa-green bg-opacity-10 hover:bg-opacity-20 transition-all py-2"
          >
            <Link href={link}>{capt}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-newa-green">
          {links.map(({ id, capt, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:text-white duration-200 link-underline hover:bg-newa-green bg-opacity-10 hover:bg-opacity-20 transition-all"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {capt}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarOld;
