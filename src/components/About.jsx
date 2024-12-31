import React from "react";
import aboutSvg from "../assets/online_resume.svg";
import SectionTitle from "./SectionTitle";
import { experience } from "../../data";
import ExperienceCard from "./experience";

function About() {
  return (
    <section className="bg-white align-items p-8  " id="experience">
      <div className="align-elemet grid md:grid-cols-2 items-center gap-24">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Experience" />
          {experience.map((experience) => {
            return <ExperienceCard key={experience.id} {...experience} />;
          })}
        </article>
      </div>
    </section>
  );
}

export default About;
