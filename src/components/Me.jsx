import meImg from "../assets/me.jpeg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import React from "react";

const Me = () => {
  return (
    <div className="bg-sky-100 py-0">
      <div className="align-items grid md:grid-cols-2  items-center gap-16">
        <article className="z-10">
          <h1 className="text-7xl font-bold tracking-wider">I'm Aishwarya</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide ">
            Front-end Developer
          </p>
          <p className="mt-2 text-base text-slate-700 capitalize z-10">
            Greetings, I'm Aishwarya, a dedicated{" "}
            <span className="text-sky-600"> Front-End Developer</span> on a
            quest for a role where I can weave my skills into captivating and
            dynamic web designs.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaLinkedin>
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaTwitterSquare>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <div>
            <img
              src={meImg}
              className="object-cover h-72 w-72 rounded-full absolute right-99 top-36 z-10"
            />

            <div className=" h-96 w-96 rounded-full border-2 border-sky-600 flex justify-center  items-center relative right-14 top-24 z-0"></div>
            <div className=" bg-sky-600 h-28 w-28 rounded-full border-2 border-sky-600 flex relative left-72 bottom-36 z-0"></div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Me;
