import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { div } from "framer-motion/client";

const certificates = [
  "/src/assets/business_intelligence.png",
  "/src/assets/GIT.png",
  "/src/assets/NLP.png",
  "/src/assets/applied_scrum_agile.png",
  "/src/assets/statisticscertification.jpg",
  "/src/assets/principlesofgenerativeaicertification.png",
  "/src/assets/deep-learning-developers.png",
  "/src/assets/python-programming-fundamentals.png",
  "/src/assets/generative-models.png",
  "/src/assets/professional-certificate-of-data-analytics.png",
  "/src/assets/Excel-Automation.png",
];

const isMobile = window.innerWidth < 768;
const itemsToShow = isMobile ? 1 : 3;

const Qualifications = () => {
  const [current, setcurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrent((prev) => (prev + 3) % certificates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="min-h-[150vh]  mt-40">
      <div className="px-4 sm:px-6 md:pl-15 lg:px-10 max-w-screen-xl mx-auto">
        <img
          loading="lazy"
          className="ml-5 lg:ml-20 mt-20 w-[92%] lg:w-[90%] h-64"
          src="/src/assets/qualification-cover-image.webp"
          alt="Qualification Cover Image"
        />
        <div className="educational">
          <h2 className="text-[#3d4449] border-b-4 border-[#F56A6A] pb-4 w-[50%] lg:w-[40%] text-2xl lg:text-4xl font-semibold mt-10 ml-5 lg:ml-20">
            Educational Qualifications{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  ml-5 lg:ml-20 mt-10">
          <div className="text-[#3d4449] lg:flex shadow-lg lg:text-lg font-opensans font-normal p-6 rounded-xl bg-white">
            <img
              loading="lazy"
              className="w-32 h-32 object-contain mr-6"
              src="/src/assets/DPUlogo1.png"
              alt="Jarurat Care Logo"
            />
            <a
              href="https://www.dypatilonline.com/about-university.aspx"
              className="flex flex-col justify-center"
            >
              <span className="text-xl font-bold">
                Master of Business Administration
              </span>
              <span className="mt-1">
                Specialization: Artificial Intelligence and Machine Learning
              </span>
              <span className="mt-1">
                Institution: Dr. DY. Patil VidyaPeeth Pune
              </span>
              <span className="mt-1">Year of Completion: 2026</span>
            </a>
          </div>
          <div className="text-[#3d4449] lg:flex shadow-lg lg:text-lg font-opensans font-normal p-6 rounded-xl bg-white">
            <img
              loading="lazy"
              className="w-32 h-32 object-contain mr-6"
              src="/src/assets/OIP.jpg"
              alt="jarurat care logo"
            />
            <a
              href="https://www.spmrcollege.org/"
              className="flex flex-col justify-center"
            >
              <span className="text-xl font-bold">Bachelors of Commerce</span>
              <span className="mt-1">
                Specialization: Accounting and Business
              </span>
              <span className="mt-1">
                Institution: Sri Pratap Memorial Rajput College of Commerce
              </span>
              <span className="mt-1">Year of Completion: 2024</span>
            </a>
          </div>
          <div className="text-[#3d4449] lg:flex shadow-lg text-lg font-opensans font-normal p-6 rounded-xl bg-white">
            <img
              loading="lazy"
              className="w-32 h-32 object-contain mr-6"
              src="/src/assets/JKBOSE-Logo.jpg"
              alt="jarurat care logo"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold">12th Class</span>
              <span className="mt-1">Stream: Commerce</span>
              <span className="mt-1">
                School: Government Higher Secondary School, JAGTI
              </span>
              <span className="mt-1">Year of Completion: 2021</span>
            </div>
          </div>
        </div>
        <div className="certificates">
          <h2 className="text-[#3d4449] border-b-4 border-[#F56A6A] pb-4 w-[55%] lg:w-[20%] text-2xl lg:text-4xl font-semibold mt-10 ml-5 lg:ml-20">
            Certifications
          </h2>

          <div className="relative w-full lg:w-[90%] mx-auto mt-5 h-auto lg:h-72 flex items-center justify-center perspective-[1000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="flex gap-8 w-full  justify-center items-center"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {Array.from({ length: 3 })
                  .map(
                    (_, i) => certificates[(current + i) % certificates.length]
                  )
                  .map((src, idx) => {
                    const isCenter = idx === 1;
                    const widthClass = isCenter
                      ? "w-[30%]"
                      : "w-[25%] opacity-80";
                    const transformStyle = isCenter
                      ? "scale(1.1)"
                      : idx === 0
                      ? "scale(0.9) rotateY(-10deg) translateX(-20px)"
                      : "scale(0.9) rotateY(10deg) translateX(20px)";

                    return (
                      <motion.a
                        key={idx}
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block rounded-xl shadow-lg transition-all duration-500 ${widthClass}`}
                        style={{
                          transform: transformStyle,
                          transition: "all 0.5s ease-in-out",
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.img
                          src={src}
                          loading="lazy"
                          alt={`Certification ${idx + 1} - ${src
                            .split("/")
                            .pop()}`}
                          className="w-full h-auto object-contain"
                        />
                      </motion.a>
                    );
                  })}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() =>
                setcurrent((prev) =>
                  prev === 0 ? certificates.length - 1 : prev - 1
                )
              }
              className="absolute left-0 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setcurrent((prev) => (prev + 1) % certificates.length)
              }
              className="absolute right-0 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Qualifications;
