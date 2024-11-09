export default function About() {
  return (
    <>
      <section id="about" className=" ">
        <div className="mx-16">
          <div className="flex items-center gap-5 py-[80px]">
            <h2 className="text-6xl font-extrabold">About</h2>
            <div className="h-1 min-w-0 flex-grow bg-black dark:bg-bgLight"></div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <span className="flex w-full lg:w-1/2 xl:w-2/5">
              <img
                src="/src/assets/dalat2.jpg"
                className="mx-auto size-96 rounded-full object-cover lg:mx-0"
                alt="about-me-image"
              />
            </span>
            {/* Description  */}
            <ul className="flex w-fit list-disc flex-col">
              <li>
                <p>
                  Hello! I'm Nguyen Duy Trung, a passionate front-end developer with a strong foundation in E-commerce.
                  Currently pursuing my Bachelor's degree at the University of Information Technology, I specialize in
                  web development and have honed my skills through various academic and professional projects.
                </p>
              </li>
              <li>
                <p>
                  With a GPA of 7.8, I have consistently demonstrated dedication to learning and improving. My
                  experience spans multiple e-commerce platforms, where I've taken on roles such as front-end developer,
                  back-end developer, and project leader. I thrive in team environments, bringing strong problem-solving
                  skills and a collaborative spirit to every project.
                </p>
              </li>
              <li>
                <p>
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
