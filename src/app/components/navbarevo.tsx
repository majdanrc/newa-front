"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Dropdown from "./dropdown";
import Image from "next/image";
import {monoton} from "@/app/ui/fonts";

const NavbarEvo = () => {
    const [navbar, setNavbar] = useState(false);
    const menu = [
        { name: "Home", url: "/" },
        {
            name: "Services",
            url: "/",
            dropdown: [
                { name: "Service 1", url: "" },
                { name: "Service 2", url: "" },
                { name: "Service 3", url: "" },
            ],
        },
        { name: "O Kinie", url: "/about" },
        { name: "Kontakt", url: "/" },
    ];
    return (
        <nav className="w-full bg-gray-800 shadow fixed z-40">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
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

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <RxCross1 className="text-white"/>
                                ) : (
                                    <AiOutlineMenu className="text-white"/>
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
                            {menu.map(({name, url, dropdown}, index) => (
                                <li key={index} className="text-gray-500">
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
export default NavbarEvo;