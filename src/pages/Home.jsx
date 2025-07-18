import React from "react";

const Home = () => {
  return (
    <main className="min-h-[100vh]   mt-30  lg:mt-40 ">
      <div className="px-4 sm:px-6 md:px-15 lg:px-10 max-w-screen-xl mx-auto">
        <div className="about-me-all flex">
          <div className="About-ME">
            <div className="Logo flex gap-x-4">
              <h1 className="text-[#3d4449] text-3xl lg:text-6xl font-semibold mt-18  ml-5 lg:ml-20">
                About Me
              </h1>
              <img
                loading="lazy"
                className="w-6 lg:w-10 lg:h-14 mt-18"
                src="/src/assets/developer.png"
                alt="Developer"
              />
            </div>

            <div className="text-[#3d4449]  lg:text-lg font-opensans font-normal mt-10 ml-5 lg:ml-20 w-[95%] lg:w-[80%]">
              <p>
                Hello! I'm Aryan Raina, a passionate web developer with a keen
                interest in creating dynamic and responsive web applications. I
                have a strong foundation in HTML, CSS, and JavaScript, and I'm
                always eager to learn new technologies and frameworks to enhance
                my skills.
              </p>
              <p className="mt-4">
                In my free time, I enjoy exploring new programming languages,
                working on personal projects, and contributing to open-source
                communities. My goal is to build innovative solutions that make
                a positive impact on users' lives.
              </p>
            </div>
          </div>
          <div className="lg:mr-20 hidden lg:block">
            <img
              loading="lazy"
              className=" mt-20 w-[1200px] h-[400px] rounded-lg "
              src="/src/assets/Aryan-bg.png"
              alt="My Profile Image"
            />
          </div>
        </div>
        <div className="experience">
          <h2 className="text-[#3d4449] text-2xl lg:text-4xl font-semibold mt-10 ml-5 lg:ml-20">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="text-[#3d4449] lg:flex shadow-lg lg:text-lg font-opensans font-normal mt-4 ml-5 lg:ml-20 p-6   rounded-xl bg-white">
              <img
                loading="lazy"
                className="w-40 h-14 lg:w-32 lg:h-32 object-contain mr-6 "
                src="/src/assets/JC_LOGO.svg"
                alt="Jarurat Care Logo"
              />

              <a
                href="/src/assets/Jarurat Care Internship Certificate.pdf"
                className="flex flex-col justify-center mt-10 "
              >
                <span className="lg:text-xl font-bold">
                  Frontend Developer Intern
                </span>
                <span className="mt-1">Company: Jarurat Care Foundation</span>

                <ul className="list-disc mt-4 ml-4 text-base leading-relaxed">
                  <li>
                    Built responsive web pages using <strong>Svelte</strong>,
                    including the donation and sign-in pages.
                  </li>
                  <li>
                    Developed an <strong>online community feature</strong> to
                    enhance user interaction.
                  </li>
                  <li>
                    Improved <strong>SEO</strong> by optimizing meta tags and
                    semantic structure.
                  </li>
                  <li>
                    Collaborated closely with the design and development team
                    for feature integration and testing.
                  </li>
                </ul>
              </a>
            </div>

            <div className="text-[#3d4449] lg:flex shadow-lg lg:text-lg font-opensans font-normal mt-4 ml-5 lg:ml-20 p-6  rounded-xl bg-white">
              <img
                loading="lazy"
                className="w-20 lg:w-8 lg:h-8 object-contain mr-6 mt-12"
                src="https://cdn.nullclass.com/favicon/favicon-32x32.png"
                alt="NullClass Logo"
              />

              <a
                href="/src/assets/NullClass-Data-Science-Internship-Certificate.pdf"
                className="flex flex-col justify-center"
              >
                <span className="lg:text-xl font-bold mt-10 lg:mt-10">
                  Data Science Intern
                </span>
                <span className="mt-1">Company: NullClass Pvt Ltd.</span>

                <ul className="list-disc mt-4 ml-4 text-base leading-relaxed">
                  <li>
                    Worked on a{" "}
                    <strong>Neural Machine Translation (NMT)</strong> system to
                    translate English to French using Transformer-based models.
                  </li>
                  <li>
                    <strong>Preprocessed</strong> and{" "}
                    <strong>vectorized </strong> large bilingual corpora for
                    training deep learning models.
                  </li>
                  <li>
                    Applied NLP techniques including{" "}
                    <strong>
                      tokenization, embedding, and sequence-to-sequence
                    </strong>{" "}
                    learning.
                  </li>
                  <li>
                    Trained, evaluated, and fine-tuned models to improve
                    translation accuracy.
                  </li>
                  <li>
                    Integrated the trained model into a{" "}
                    <strong>Streamlit web app</strong> for real-time
                    translation.
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
        <div className="skills relative mx-auto">
          <h2 className="text-[#3d4449] flex justify-center pb-4 lg:w-[90%] text-4xl font-semibold mt-10 ml-10 lg:ml-20">
            Skills
          </h2>

          <div className="allskills hidden lg:block ml-20">
            <div className="flex gap-6 justify-center mt-4 max-w-[100%] mx-auto">
              <a href="https://www.python.org/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/python.svg"
                  alt="Python"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/html.svg"
                  alt="HTML"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/css.svg"
                  alt="CSS"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/javascript.svg"
                  alt="JavaScript"
                />
              </a>
              <a href="https://react.dev/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/react-logo.svg"
                  alt="React"
                />
              </a>
              <a href="https://tailwindcss.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-6"
                  src="/src/assets/tailwindcss-logo.png"
                  alt="Tailwind CSS"
                />
              </a>
              <a href="https://nextjs.org/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/nextjs-logo.svg"
                  alt="Next.js"
                />
              </a>
              <a href="https://nodejs.org/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/nodejs.svg"
                  alt="Node.js"
                />
              </a>
            </div>
            {/* Row 2: 6 Skills */}
            <div className="flex gap-6  justify-center mt-6 max-w-[85%] mx-auto">
              <a href="https://www.mongodb.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/mongodb.svg"
                  alt="MongoDB"
                />
              </a>
              <a href="https://www.mysql.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/mysql.svg"
                  alt="MySQL"
                />
              </a>
              <a href="https://expressjs.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/express.svg"
                  alt="Express"
                />
              </a>
              <a href="https://github.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/github.svg"
                  alt="GitHub"
                />
              </a>
              <a href="https://www.docker.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/docker.svg"
                  alt="Docker"
                />
              </a>
              <a href="https://kubernetes.io/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/kubernetes.svg"
                  alt="Kubernetes"
                />
              </a>
            </div>
            <div className="flex gap-6  justify-center mt-6 max-w-[70%] mx-auto">
              <a href="https://powerbi.microsoft.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/Microsoft-Power-BI-Symbol.png"
                  alt="Power BI"
                />
              </a>
              <a
                href="https://www.microsoft.com/en-us/microsoft-365/excel"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-12"
                  src="/src/assets/excel.png"
                  alt="Excel"
                />
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Machine_learning"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-20"
                  src="/src/assets/machine-learning-removebg-preview.png"
                  alt="Machine Learning"
                />
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Deep_learning"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-20"
                  src="/src/assets/deep-learning-removebg-preview.png"
                  alt="Deep Learning"
                />
              </a>
            </div>

            <div className="flex gap-6  justify-center mt-6 max-w-[50%] mx-auto">
              <a
                href="https://en.wikipedia.org/wiki/Data_analysis"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-20"
                  src="/src/assets/data-analytics-removebg.png"
                  alt="Data Analytics"
                />
              </a>
              <a href="https://fastapi.tiangolo.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-20"
                  src="/src/assets/fastapi.png"
                  alt="FastAPI"
                />
              </a>
            </div>
          </div>
          <div className="allskills block lg:hidden ml-5">
            <div className="flex gap-6 justify-center mt-4  mx-auto">
              <a href="https://www.python.org/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/python.svg"
                  alt="Python"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/html.svg"
                  alt="HTML"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/css.svg"
                  alt="CSS"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/javascript.svg"
                  alt="JavaScript"
                />
              </a>
            </div>
            <div className="flex gap-6 justify-center mt-4  mx-auto">
              <a href="https://react.dev/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/react-logo.svg"
                  alt="React"
                />
              </a>
              <a href="https://tailwindcss.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-4"
                  src="/src/assets/tailwindcss-logo.png"
                  alt="Tailwind CSS"
                />
              </a>
              <a href="https://nextjs.org/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/nextjs-logo.svg"
                  alt="Next.js"
                />
              </a>
              <a href="https://nodejs.org/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-8"
                  src="/src/assets/nodejs.svg"
                  alt="Node.js"
                />
              </a>
            </div>
            {/* Row 2: 6 Skills */}
            <div className="flex gap-6  justify-center mt-6  mx-auto">
              <a href="https://www.mongodb.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-4"
                  src="/src/assets/mongodb.svg"
                  alt="MongoDB"
                />
              </a>
              <a href="https://www.mysql.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-6"
                  src="/src/assets/mysql.svg"
                  alt="MySQL"
                />
              </a>
              <a href="https://expressjs.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-4"
                  src="/src/assets/express.svg"
                  alt="Express"
                />
              </a>
              <a href="https://github.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/github.svg"
                  alt="GitHub"
                />
              </a>
            </div>
            <div className="flex gap-6  justify-center mt-6  mx-auto">
              <a href="https://www.docker.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-8"
                  src="/src/assets/docker.svg"
                  alt="Docker"
                />
              </a>
              <a href="https://kubernetes.io/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/kubernetes.svg"
                  alt="Kubernetes"
                />
              </a>
              <a href="https://powerbi.microsoft.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/Microsoft-Power-BI-Symbol.png"
                  alt="Power BI"
                />
              </a>
              <a
                href="https://www.microsoft.com/en-us/microsoft-365/excel"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/excel.png"
                  alt="Excel"
                />
              </a>
            </div>

            <div className="flex gap-6  justify-center mt-6  mx-auto">
              <a
                href="https://en.wikipedia.org/wiki/Machine_learning"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-18"
                  src="/src/assets/machine-learning-removebg-preview.png"
                  alt="Machine Learning"
                />
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Deep_learning"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-15"
                  src="/src/assets/deep-learning-removebg-preview.png"
                  alt="Deep Learning"
                />
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Data_analysis"
                className="skill-icon"
              >
                <img
                  loading="lazy"
                  className="h-20"
                  src="/src/assets/data-analytics-removebg.png"
                  alt="Data Analytics"
                />
              </a>
              <a href="https://fastapi.tiangolo.com/" className="skill-icon">
                <img
                  loading="lazy"
                  className="h-10"
                  src="/src/assets/fastapi.png"
                  alt="FastAPI"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
