import { skills } from "../../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="p-8 align-items " id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-14 md:grid-cols-2 lg:flex lg:space-x-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
