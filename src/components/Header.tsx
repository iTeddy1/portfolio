import useScrollHeader from "@/hooks/useScrollHeader";
import { ModeToggle } from "./ModeToggle";
import NavLinks from "./NavLinks";
import { Button } from "./ui/button";

export default function Header() {
  const isScroll = useScrollHeader();

  const onScrollStyle = `top-0`;
  const defaultStyle = `top-0 md:top-5 md:px-16`;

  return (
    <>
      <header
        className={`${isScroll ? onScrollStyle : defaultStyle} sticky z-10 w-full px-0 transition-all duration-500`}
      >
        <nav className="mx-auto flex w-full items-center justify-between bg-[#DDE0D6] px-6 shadow-lg backdrop-blur-md dark:bg-[#262727] md:max-w-[1230px] md:rounded-xl">
          <span>
            <a href="/#">
              <img src="/logo-portfolio.png" className="size-20 object-cover" alt="logo-portfolio" />
            </a>
          </span>
          <NavLinks />
          <div className="flex items-center gap-3">
            <ModeToggle />
            <a href="#contact">
              <Button>Contact me</Button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
