import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="relative w-full bg-[#d7d9ce] bg-[radial-gradient(#C7CABA_1px,transparent_1px)] text-[#323434] antialiased [background-size:20px_20px] dark:bg-[#191A1A] dark:bg-[radial-gradient(#3D3D3D8f_1px,transparent_1px)] dark:text-main md:max-w-full">
        <div className="relative flex h-full w-full flex-col">
          <ScrollToTop />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
