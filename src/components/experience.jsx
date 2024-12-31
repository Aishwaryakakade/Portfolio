import React from "react";

import { TbWorldWww } from "react-icons/tb";

function ExperienceCard({ title, time, text }) {
  return (
    <article>
      <div>
        <h2 className="text-slate-700 font-medium my-2">{title}</h2>
        <p className="text-xs text-slate-500 my-2">{time}</p>
        <p className="text-slate-700 text-sm mb-4">{text}</p>
      </div>
    </article>
  );
}

export default ExperienceCard;
