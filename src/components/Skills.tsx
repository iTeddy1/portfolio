import { skills } from "@/data/skills";
import parse from "html-react-parser";



export default function Skills() {
  return (
    <section id="skills" className="">
      <div className="mx-16">
        <div className="flex items-center gap-5 py-[80px]">
          <h2 className="text-6xl font-extrabold">Skills</h2>
          <div className="h-1 min-w-0 flex-grow bg-black dark:bg-bgLight"></div>
        </div>
        <div className="flex flex-col space-y-8">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="flex flex-col space-y-4 rounded-xl border-2 border-borders bg-container p-6 dark:border-borders-dark dark:bg-container-dark"
            >
              <h3 className="text-2xl font-bold">{skill.label}</h3>
              <div className="flex gap-4">
                {skill.items.map((item) => (
                  <div key={item.name} className="flex gap-3">
                    <span className="size-6 fill-bgDark dark:fill-bgLight">{parse(item.icon)}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
