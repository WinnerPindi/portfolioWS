import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import logo from "../assets/Logowinpng.png";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center ml-4">
        <img src={logo} alt="log" className="w-24 h-24" />
      </div>

      <div className="mr-4 flex items-center justify-center gap-4 text-xl">
        <a href="https://www.linkedin.com/in/winner-pindi-768400235/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/WinnerPindi" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/winner_p78/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
