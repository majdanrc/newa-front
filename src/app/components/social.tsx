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
  { icon: <AiFillFacebook />, link: "https://www.facebook.com/kkfnewa" },
  { icon: <AiFillInstagram />, link: "https://instagram.com" },
  { icon: <AiOutlineTwitter />, link: "https://twitter.com" },
  { icon: <AiFillYoutube />, link: "https://youtube.com" },
];

const Header = () => {
  return (
    <AppBar position="fixed" className="bg-newa-green">
      <Toolbar className="justify-end py-2">
        <figure className="flex gap-5">
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
