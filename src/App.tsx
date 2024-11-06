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
      <div className="dark:text-main relative bg-[#d7d9ce] bg-[radial-gradient(#C7CABA_1px,transparent_1px)] text-[#323434] antialiased [background-size:20px_20px] dark:bg-[radial-gradient(#3D3D3D8f_1px,transparent_1px)] dark:bg-[#191A1A]">
        <ScrollToTop />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;