"use client";

import Link from "next/link";
import Image from "next/image";
import { monoton } from "@/app/ui/fonts";
import React, { useState, useEffect, useRef } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import Dropdown from "@/app/components/daisydropdown";

const socialMediaIcons = [
  { icon: <AiFillFacebook />, link: "https://www.facebook.com/kkfnewa" },
  { icon: <AiFillInstagram />, link: "https://instagram.com" },
  { icon: <AiOutlineTwitter />, link: "https://twitter.com" },
  { icon: <AiFillYoutube />, link: "https://youtube.com" },
];

const DaisyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menu = [
    {
      name: "O Kinie",
      dropdown: [
        { name: "O Kinie", url: "/about" },
        { name: "Bilety", url: "/about#bilety" },
        { name: "Regulamin", url: "/about#regulamin" },
      ],
    },
    { name: "Premiery", url: "/new-releases" },
    { name: "Zapowiedzi", url: "/upcoming" },
    { name: "Repertuar", url: "/repertoire" },
    { name: "Kontakt", url: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-newa-green shadow-lg backdrop-blur-lg border-b border-gray-800">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-gray-800 rounded-box w-52 border border-gray-700"
            >
              {menu.map(({ name, url, dropdown }, index) => (
                <li key={index} className="text-white">
                  {dropdown ? (
                    <Dropdown name={name} dropdownItems={dropdown} />
                  ) : (
                    <Link href={url} onClick={closeMenu}>
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex h-full items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="cursor-pointer relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
            />
          </Link>
          <Link href="/" className="hidden sm:block">
            <h1
              className={`${monoton.className} text-lg md:text-2xl lg:text-3xl text-gray-100 whitespace-nowrap`}
            >
              kino newa
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {menu.map(({ name, url, dropdown }, index) => (
            <li key={index} className="text-white">
              {dropdown ? (
                <Dropdown name={name} dropdownItems={dropdown} />
              ) : (
                <Link
                  href={url}
                  className="hover:bg-newa-green/20 transition-colors px-4 py-2 rounded-lg"
                >
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <figure className="hidden md:flex gap-3 lg:gap-5 px-2 lg:px-4">
          {socialMediaIcons.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-newa-green transition-colors"
            >
              <span className="text-white text-[18px] lg:text-[20px] cursor-pointer">
                {icon}
              </span>
            </a>
          ))}
        </figure>
      </div>
    </div>
  );
};

export default DaisyNavbar;
