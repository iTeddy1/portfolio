import { skills } from "@/data/skills";
import parse from "html-react-parser";
import SectionDivide from "./SectionDivide";

export default function Skills() {
  return (
    <section id="skills" className="">
      <div className="mx-16">
        <SectionDivide sectionName="Skills" />
        <div className="flex flex-col space-y-8">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="flex flex-col space-y-4 rounded-xl border-2 border-borders bg-container p-6 dark:border-borders-dark dark:bg-container-dark"
            >
              <h3 className="text-2xl font-bold">{skill.label}</h3>
              <div className="flex flex-wrap gap-4">
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
