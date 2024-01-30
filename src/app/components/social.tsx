// Header.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

const socialMediaIcons = [
  { icon: <AiFillFacebook />, link: "https://facebook.com" },
  { icon: <AiFillInstagram />, link: "https://instagram.com" },
  { icon: <AiOutlineTwitter />, link: "https://twitter.com" },
  { icon: <AiFillYoutube />, link: "https://youtube.com" },
];

const Header = () => {
  const contactInfo = [
    { icon: <AiOutlineMail />, text: "ciocia@szefowa.com" },
    { icon: <AiOutlinePhone />, text: "+123456789" },
  ];

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#3c4f3a" }}>
      <Toolbar className="lg:flex lg:justify-between py-2">
        <ul className="list-none flex gap-14 ml-24">
          {contactInfo.map(({ icon, text }, index) => (
            <li
              key={index}
              className="text-white text-opacity-[0.9] flex flex-row content-center justify-center gap-1 pt-1"
            >
              <span className=" text-royal_blue pt-1">{icon}</span>
              {text}
            </li>
          ))}
        </ul>
        <figure className="flex mr-44 gap-3 pt-1">
          {socialMediaIcons.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white text-[24px] cursor-pointer hover:text-royal_blue">
                {icon}
              </span>
            </a>
          ))}
        </figure>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
