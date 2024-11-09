import { navLinks } from "@/data/links";
import { useState } from "react";

export default function NavLinks() {
  const [tab, setTab] = useState<number | null>();

  return (
    <ul className="flex gap-8 p-4">
      {navLinks.map((link, index) => (
        <li className="" key={link.path} onMouseEnter={() => setTab(index)} onMouseLeave={() => setTab(null)}>
          <a href={link.path} className="relative text-base font-medium">
            {link.title}
            <span
              style={{
                transform: tab === index ? "scaleX(1)" : "scaleX(0)",
              }}
              className={`absolute -bottom-2 -left-0 -right-0 h-1 origin-left scale-x-0 rounded-full bg-bgDark transition-transform duration-300 ease-out dark:bg-bgLight`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
