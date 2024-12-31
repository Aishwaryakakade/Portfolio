import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaAngular,
  FaCss3Alt,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import shoppingcart from "./src/assets/shoppingcart.jpg";
import jobapplication from "./src/assets/jobapplication.jpg";

export const experience = [
  {
    id: nanoid(),
    title: "Software Engineer 1",
    time: "08/2024 - Present",
    text: "Led scalable app development with Angular and React, adding advanced PDF.js features like highlighting, annotations, and smooth scrolling. Collaborated with UI/UX experts to apply modern design principles for an enhanced user experience.",
  },
  {
    id: nanoid(),
    title: "Associate Software Engineer",
    time: "08/2022 - 07/2024",
    text: "Developed dynamic and interactive web applications utilizing Angular, and React. Work included integrating RESTful APIs, employing D3.js for complex data visualizations, and implementing advanced authentication mechanisms such as JWT and Auth0. Collaborated closely with UI/UX designers to refine interfaces, and used tools like Hotjar and Google Analytics to analyze and improve website performance.",
  },
  {
    id: nanoid(),
    title: "Junior Software Engineer",
    time: "09/2019 - 7/2022",
    text: "Developed and maintained Angular applications, focusing on UI integration, legacy code migration, and collaborating with senior engineers. Proficient in creating responsive, pixel-perfect websites",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: jobapplication,
    url: "",
    github: "https://github.com/Aishwaryakakade/Times-job",
    title: "Times Job",
    text: "Times job is a tracking application aimed at helping users manage their job applications effectively.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://bbriti.netlify.app/",
    github: "https://github.com/Aishwaryakakade/BBriti",
    title: "finance website",
    text: `A static web application for a enterprise. \b A freelance project`,
  },
  {
    id: nanoid(),
    img: shoppingcart,
    url: "",
    github: "https://github.com/Aishwaryakakade/Nextjs",
    title: "Shopping cart",
    text: "A simple Nextjs web application used to track shopping appication",
  },
];

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: <FaCss3Alt className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },

  {
    id: nanoid(),
    title: "Angular",
    icon: <FaAngular className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Linux",
    icon: <FaLinux className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGitAlt className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  //
];
