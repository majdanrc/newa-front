import Link from "next/link";
import Image from "next/image";
import {monoton} from "@/app/ui/fonts";
import React from "react";

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
    <div className="navbar bg-base-100">
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
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li>
                                <a>Submenu 1</a>
                            </li>
                            <li>
                                <a>Submenu 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
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
                        className={`${monoton.className} text-xl md:text-4xl md:leading-normal text-newa-green shadow-amber-700`}
                    >
                        kino newa
                    </h1>
                </Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li>
                                <a>Submenu 1</a>
                            </li>
                            <li>
                                <a>Submenu 2</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <a>Item 3</a>
                </li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
    </div>
  );
};

export default DaisyNavbar;
