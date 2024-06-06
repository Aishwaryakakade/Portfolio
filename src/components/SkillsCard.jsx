const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className="h-16 w-16 text-sky-600">{icon}</span>
      <p className="mt-6 font-bold text-xl">{title}</p>
      <p className="mt-2 text-slate-500 text-lg">{text}</p>
    </article>
  );
};
export default SkillsCard;
