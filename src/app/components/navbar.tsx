"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@/app/components/dropdown";
import { monoton } from "@/app/ui/fonts";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    {
      name: "O Kinie",
      dropdown: [
        { name: "O Kinie", url: "/about" },
        { name: "Bilety", url: "" },
        { name: "Regulamin", url: "" },
      ],
    },
    { name: "Premiery", url: "/new-releases" },
    { name: "Zapowiedzi", url: "/upcoming" },
    { name: "Repertuar", url: "/repertoire" },
    { name: "Kontakt", url: "/contact" },
  ];
  return (
    <nav className="w-full pt-16 bg-gray-800 text-shadow rounded-e-lg z-40">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-1 md:block">
            <div className="flex h-full items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="cursor-pointer relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                />
              </Link>
              <Link href="/">
                <h1
                  className={`${monoton.className} text-xl md:text-4xl md:leading-normal text-newa-green shadow-amber-700`}
                >
                  kino newa
                </h1>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-white bg-gray-600" />
                ) : (
                  <AiOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map(({ name, url, dropdown }, index) => (
                <li key={index} className="text-white hover:text-newa-green">
                  {dropdown ? (
                    <Dropdown name={name} dropdownItems={dropdown} />
                  ) : (
                    <Link href={url}>{name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
