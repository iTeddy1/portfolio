import useScrollHeader from "@/hooks/useScrollHeader";
import { ModeToggle } from "./ModeToggle";
import NavLinks from "./NavLinks";
import { Button } from "./ui/button";

export default function Header() {
  const isScroll = useScrollHeader();

  const onScrollStyle = `top-0`;
  const defaultStyle = `top-5 px-16`;

  return (
    <>
      <header className={`${isScroll ? onScrollStyle : defaultStyle} fixed w-full z-10 transition-all duration-500`}>
        <nav className="mx-auto flex max-w-[1220px] items-center justify-between rounded-xl bg-[#DDE0D6] backdrop-blur-md px-6 dark:bg-[#262727]">
          <span>
            <a href="/#">
              <img src="/src/assets/logo portfolio.png" className="size-20 object-cover" alt="logo" />
            </a>
          </span>
          <NavLinks />
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button>Contact me</Button>
          </div>
        </nav>
      </header>
    </>
  );
}
