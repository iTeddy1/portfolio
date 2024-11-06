export default function About() {
  return (
    <>
      <section id="about" className=" ">
        <div className="mx-16">
          <div className="flex items-center gap-5 py-[80px]">
            <h2 className="text-6xl font-extrabold">About</h2>
            <div className="h-1 min-w-0 flex-grow bg-black dark:bg-bgLight"></div>
          </div>
          <div className="flex gap-8">
            <span className="flex w-2/5">
              <img src="/src/assets/dalat2.jpg" className="size-96 rounded-full object-cover" alt="logo" />
            </span>
            {/* Description  */}
            <div className="flex w-fit flex-col">
              <p>
                I am Nguyen Duy Trung, a Frontend Developer. I am passionate about creating beautiful and responsive
                websites. I have experience in building websites using HTML, CSS, and JavaScript. I am also familiar
                with React and Tailwind CSS. I am always eager to learn new technologies and improve my skills. I am
                looking for opportunities to work on exciting projects and collaborate with talented people. I am a team
                player and enjoy working in a collaborative environment. I am excited about the opportunity to work with
                you and contribute to your projects.
              </p>
              <div>
                <h3>Education</h3>
                <p>
                  Bachelor of Science in Computer Science, University of Information Technology, Vietnam National
                  University, Ho Chi Minh City
                </p>
                <p>GPA: 7.6/10</p>
              </div>
              <div>
                <h3></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
