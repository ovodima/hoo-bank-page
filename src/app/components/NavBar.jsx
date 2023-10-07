"use client";
import React, { useState } from "react";
import { navLinks } from "../constants";
import { logo, close, menu } from "../../../public";
import Image from "next/image";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={logo} alt="bank" width={124} height={32} />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${i === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          className="object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]
                            ${
                              active === nav.title
                                ? "text-white"
                                : "text-dimWhite"
                            }
                            ${i === navLinks.length - 1 ? "mb-0" : "mb-4"}
                            `}
                onClick={() => setActive(nav.title)}
              >
                {" "}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
