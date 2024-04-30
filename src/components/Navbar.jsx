import React from "react";
import logo from "../assets/kevinRushLogo.png/";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 navbar">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-10 w-10" src={logo} alt="logo" />
        </a>
      </div>
      <div className="icons m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sourabh-choudhary-00b6a1306?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6rsuuR3lQPGnYTu5D1l3KQ%3D%3D"
          target="_blank"
          className="hover:scale-90 transform transition-transform duration-300 ease-in-out shadow-md"
        >
          <FaLinkedin />
        </a>
        <a href="https://discord.com/" target="_blank"  className="hover:scale-90 transform transition-transform duration-300 ease-in-out shadow-md">
          <FaDiscord />
        </a>
        <a href="https://github.com/" target="_blank"  className="hover:scale-90 transform transition-transform duration-300 ease-in-out shadow-md">
          <FaGithub />
        </a>
        <a href="https://twitter.com/" target="_blank"  className="hover:scale-90 transform transition-transform duration-300 ease-in-out shadow-md ">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
