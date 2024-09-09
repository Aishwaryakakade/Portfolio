import React from "react";
import aboutSvg from "../assets/online_resume.svg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="bg-white py-20 " id="experience">
      <div className="align-elemet grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Experience" />
        </article>
      </div>
    </section>
  );
}

export default About;
