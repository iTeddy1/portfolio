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
      <header className={`${isScroll ? onScrollStyle : defaultStyle} px-0 sticky z-10 w-full transition-all duration-500`}>
        <nav className="mx-auto flex md:max-w-[1230px] w-full items-center justify-between md:rounded-xl bg-[#DDE0D6] px-6 backdrop-blur-md dark:bg-[#262727] shadow-lg">
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
