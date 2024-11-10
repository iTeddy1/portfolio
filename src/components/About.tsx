import SectionDivide from "./SectionDivide";

export default function About() {
  return (
    <>
      <section id="about" className=" ">
        <div className="mx-16">
          <SectionDivide sectionName="About" />
          <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr_1fr]">
            <span className="col-span-1 mb-8 flex w-full">
              <img
                src="/dalat2.jpg"
                className="mx-auto size-[400px] rounded-full object-cover lg:mx-0"
                alt="about-me-image"
              />
            </span>
            {/* Description  */}
            <ul className="col-span-2 flex w-fit list-disc flex-col">
              <li className="">
                <p className="max-w-6xl">
                  Hello! I'm Nguyen Duy Trung, a passionate front-end developer with a strong foundation in E-commerce.
                  Currently pursuing my Bachelor's degree at the University of Information Technology, I specialize in
                  web development and have honed my skills through various academic and professional projects.
                </p>
              </li>
              <li className="">
                <p className="max-w-6xl">
                  With a GPA of 7.8, I have consistently demonstrated dedication to learning and improving. My
                  experience spans multiple e-commerce platforms, where I've taken on roles such as front-end developer,
                  back-end developer, and project leader. I thrive in team environments, bringing strong problem-solving
                  skills and a collaborative spirit to every project.
                </p>
              </li>
              <li className="">
                <p className="max-w-6xl">
                  I'm actively seeking a front-end developer internship to apply my skills in real-world settings, learn
                  from industry professionals, and make meaningful contributions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
