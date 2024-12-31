import React from "react";
import { links } from "../../data";
import Resume from "../assets/Aishwarya_LK_ React and Angular.docx";
const Navbar = () => {
  return (
    <nav className="bg-sky-100">
      <div className="flex flex-row justify-around sm:flex-row sm:gap-x-16 sm:items-start sm:py-8">
        <div className="flex flex-row gap-x-12">
          <h2 className=" text-3xl font-bold">
            Web
            <span className="text-sky-600">Dev </span>
          </h2>
          <div className="flex gap-x-3">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-lg tracking-wide hover:text-sky-600 duration-300 "
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>

        <a href="">
          <button className="resume-btn">Resume</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
