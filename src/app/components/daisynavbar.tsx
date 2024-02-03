import Link from "next/link";
import Image from "next/image";
import { monoton } from "@/app/ui/fonts";
import React from "react";
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
    <div className="navbar bg-base-100 fixed bg-gradient-to-r from-gray-900 to-newa-green">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu.map(({ name, url, dropdown }, index) => (
              <li key={index} className="text-white">
                {dropdown ? (
                  <Dropdown name={name} dropdownItems={dropdown} />
                ) : (
                  <Link href={url}>{name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
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
              className={`${monoton.className} text-xl md:text-3xl md:leading-normal text-gray-100`}
            >
              kino newa
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu.map(({ name, url, dropdown }, index) => (
            <li key={index} className="text-white">
              {dropdown ? (
                <Dropdown name={name} dropdownItems={dropdown} />
              ) : (
                <Link href={url}>{name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <figure className="flex gap-5 px-4">
          {socialMediaIcons.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white text-[18px] cursor-pointer">
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
