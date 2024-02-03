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
      <Toolbar className="justify-end py-2">
        <figure className="flex gap-5">
          {socialMediaIcons.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white text-[18px] cursor-pointer hover:text-royal_blue">
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
