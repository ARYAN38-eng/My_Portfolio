const Projects = ({ activesidebar }) => {
  return (
    <main className="px-6 py-20  lg:ml-15">

      <div
        className={`${
          !activesidebar ? "ml-5 lg:ml-30" : "ml-auto"
        } transition-all duration-400 ease-in `}
      >
        <div className="spotify-project md:ml-10 lg:ml-1 relative lg:flex mt-20 ">
          <h2 className="text-[#3d4449]  text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            Spotify Clone
          </h2>
          <div className="description  lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            I built a Spotify Clone project, which significantly deepened my
            understanding of core JavaScript concepts through hands-on
            development. The project includes features like volume control,
            pause/resume, next/previous track navigation—all implemented using
            pure JavaScript! JavaScript was used not only for interactivity but
            also for managing the entire front-end functionality, giving me
            real-world experience in dynamic UI development.
          </div>
          <iframe
            className={`h-72 ${ activesidebar ? "w-full lg:w-[45%] lg:ml-76 ": "w-full lg:w-[50%] lg:ml-80"
            }  mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110  transition-all duration-500`}
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7336651219915968515?compact=1"
            height="399"
            width="504"
            frameborder="0"
            allowFullScreen=""
            title="Embedded post"
          ></iframe>{" "}
        </div>

        <div className="spotify-project md:ml-10 lg:ml-1 relative lg:flex mt-20 ">
          <h2 className="text-[#3d4449]    text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            SQL Chatbot!
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            I built an SQL chatbot that lets users query MySQL databases using
            natural language, powered by LangChain and Ollama. It translates
            complex questions into optimized SQL and returns AI-formatted
            results. Developed with Python, this project enhances data access
            for non-technical users, combining NLP, backend logic, and database
            management for a smarter, user-friendly data exploration tool.
          </div>
          <iframe
            className={`h-72  ${ activesidebar ? "w-full lg:w-[45%] lg:ml-76 ": "w-full lg:w-[50%] lg:ml-80"
            } mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110  transition-all duration-500`}
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7323990516600078336?compact=1"
            height="399"
            width="504"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div className="boostmeup-project md:ml-10 lg:ml-1 relative lg:flex mt-20">
          <h2 className="text-[#3d4449] text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            BoostMeUp!!
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            BoostMeUp!! is a full-stack creator support platform inspired by
            Patreon. Built with Next.js and TailwindCSS, it uses MongoDB Atlas
            for data storage and Razorpay for payments. OAuth via Google and
            GitHub ensures secure access. Real-time analytics, Cloudinary for
            video hosting, and Vercel deployment make it scalable and efficient.
            Check it out here: (https://boost-me-up-project.vercel.app/)
          </div>
          <iframe
            className={`h-72  ${ activesidebar ? "w-full lg:w-[45%] lg:ml-76" : "w-full lg:w-[50%] lg:ml-80"} mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110 transition-all duration-500`}
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7318890216356728832?compact=1"
            height="399"
            width="504"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div className="password-manager-project md:ml-10 lg:ml-1 relative lg:flex mt-20">
          <h2 className="text-[#3d4449] text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            Password Manager
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            This full-stack Password Manager is built with React, TailwindCSS,
            Firebase, Express.js, and MongoDB. It features GitHub-based
            authentication, a responsive user interface, and secure password
            storage. Designed for both functionality and security, the project
            demonstrates modern development practices and backend integration,
            providing a reliable solution for managing user credentials while
            strengthening authentication and full-stack development skills.
          </div>
          <iframe
            className={`h-72  ${ activesidebar ? "w-full lg:w-[45%] lg:ml-56 2xl:ml-53 ": "w-full lg:w-[50%] lg:ml-60 2xl:ml-56"
            } mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110 transition-all duration-500`}
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7309263681421201409?compact=1"
            height="399"
            width="504"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div className="docker-project relative md:ml-10 lg:ml-1 lg:flex mt-20">
          <h2 className="text-[#3d4449] lg:w-[30%]  text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            Docker Integration
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            Docker was integrated into the Pokémon Recognizer project to improve
            scalability and deployment efficiency. The MySQL database was
            containerized using Docker Compose, enabling consistent environments
            across development and production. Health checks were configured to
            monitor MySQL status, ensuring reliability. This setup simplifies
            the deployment process and enhances maintainability, making the
            project more robust and production-ready.
          </div>
          <iframe
            className={`h-72 ${
              !activesidebar ? "w-full lg:w-[50%] lg:ml-38 2xl:ml-35" : "w-full lg:w-[45%] lg:ml-45 2xl:ml-47"
            } mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110 transition-all duration-500`}
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7271818108162437120?compact=1"
            height="399"
            width="504"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div className="pokemon-project relative md:ml-10 lg:ml-1 lg:flex mt-20">
          <h2 className="text-[#3d4449] lg:w-[40%] text-2xl lg:text-2xl 2xl:text-4xl font-semibold">
            Pokemon Dataset (EDA){" "}
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            Conducted detailed exploratory data analysis on a Pokémon dataset,
            focusing on numerical attributes like Attack, Defense, and HP.
            Visualizations were used to uncover patterns, correlations, and key
            trends. These insights are helping guide the development of a
            Pokémon image recognition model by identifying features that could
            improve prediction accuracy and model performance.
          </div>
          <iframe
            className={`h-72 ${
              !activesidebar ? "w-full lg:w-[50%] lg:ml-9 2xl:ml-2" : "w-full lg:w-[45%] lg:ml-19"
            } mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110 transition-all duration-500`}
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256663855085334528?compact=1"
            height="399"
            width="504"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div className="airline-project relative md:ml-10 lg:ml-1 lg:flex mt-20">
          <h2 className="text-[#3d4449] lg:w-[40%]  text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            Airline Analysis Dashboard
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            I analyzed the US airline industry, revealing key trends in fare
            structures, demand, and connectivity. Southwest leads in market
            share, while Chicago remains the top-connected hub. Fares vary
            widely, often independent of distance. Notably, demand dropped in
            2020 due to COVID-19, with a three-year recovery. Eagle to Miami was
            identified as the most expensive route.
          </div>
          <a
            className={`group block h-72 ${
              activesidebar ? "lg:w-[45%] lg:ml-19" : "lg:w-[50%] lg:ml-8 2xl:ml-2"
            }  mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110 transition-all duration-500`}
            href="/airlinesroutes_and_fare_dashboard.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="h-full w-full"
              src="/airlinesroutes_and_fare_dashboard.pdf"
              title="Power BI Dashboard"
            ></iframe>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click on border to open in new tab
            </div>
          </a>
        </div>
        <div className="global-economic-project relative md:ml-10 lg:ml-1 lg:flex mt-20">
          <h2 className="text-[#3d4449] lg:w-[40%] text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            Global Economics Analysis
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            Created an interactive Power BI dashboard analyzing global
            development trends from 2000 to 2020. The project involved data
            cleaning, EDA, and building visualizations to compare regional
            progress, highlight disparities, and uncover correlations across key
            indicators. This helped sharpen my data storytelling and statistical
            analysis skills while making global trends more accessible and
            understandable through clean, user-friendly visuals.
          </div>
          <a
            className={`group block h-72 ${
              activesidebar ? "lg:w-[45%] lg:ml-19" : "lg:w-[50%] lg:ml-8 2xl:ml-2"
            } mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110 transition-all duration-500`}
            href="/global_economics_2000_to_2020.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="h-full w-full"
              src="/global_economics_2000_to_2020.pdf"
              title="Power BI Dashboard"
            ></iframe>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click on border to open in new tab
            </div>
          </a>
        </div>
        <div className="olympic-project relative md:ml-10 lg:ml-1 lg:flex mt-20">
          <h2 className="text-[#3d4449] lg:w-[40%] text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            Olympic Analysis
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-50 p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            Developed an interactive Olympic Dashboard using Power BI to analyze
            country-wise performance across various categories. Key features
            include visualizations of top and low achievers by medal count,
            insights into countries with zero medals, and dynamic filters for
            customized exploration. This project aims to provide a clear and
            engaging way to understand Olympic trends and performance through
            data storytelling.{" "}
          </div>
          <a
            className={`group block h-72 ${
              activesidebar ? "lg:w-[45%] lg:ml-19" : "lg:w-[50%] lg:ml-8 2xl:ml-2"
            } mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110 transition-all duration-500`}
            href="/OlympicsDashboard.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="h-full w-full"
              src="/OlympicsDashboard.pdf"
              title="Power BI Dashboard"
            ></iframe>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click on border to open in new tab
            </div>
          </a>
        </div>
        <div className="spotify-analysis-project relative md:ml-10 lg:ml-1 lg:flex mt-20">
          <h2 className="text-[#3d4449] lg:w-[40%] text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
            Spotify Analysis
          </h2>
          <div className="description lg:absolute top-15 bg-gray-100 rounded-2xl lg:h-auto p-5 w-full lg:w-[60%] 2xl:w-[50%] hover:scale-105 transition-all duration-500">
            Completed a Spotify Music Analytics project using Tableau, where I
            explored patterns in genres, song characteristics, and artist
            performance. The dashboard features interactive charts showing
            relationships between energy and danceability, distributions of
            valence, tempo, and more. This project helped strengthen my data
            visualization and storytelling skills while offering a fun dive into
            music trends and insights. Viewers can explore top songs, albums,
            and artists through dynamic, user-friendly dashboards.
          </div>
          <a
            className={`group block h-72 ${
              activesidebar ? "lg:w-[45%] lg:ml-19" : "lg:w-[50%] lg:ml-8 2xl:ml-2"
            } mt-5 border-8 border-gray-800 rounded-2xl hover:scale-110 transition-all duration-500`}
            href="/spotify_dashboard.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="h-full w-full"
              src="/spotify_dashboard.pdf"
              title="Power BI Dashboard"
            ></iframe>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click on border to open in new tab
            </div>
          </a>
        </div>
      </div>

      <div id="main" className=" py-12">
        <div className="max-w-screen-xl mx-auto">
          <header id="header" className="mb-10 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
              Other Machine Learning Projects
            </h1>
          </header>

          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-700 mb-1">
                  Project 1
                </h3>
                <h4 className="text-lg font-medium text-gray-600 mb-3">
                  Heart Attack Detector
                </h4>
                <a
                  href="https://github.com/ARYAN38-eng/HeartAttackDetector"
                  target="_blank"
                  className="text-[#f56a6a] hover:text-blue-800 underline"
                >
                  Click Here to Go on Github Page
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-700 mb-1">
                  Project 2
                </h3>
                <h4 className="text-lg font-medium text-gray-600 mb-3">
                  Thyroid Detection
                </h4>
                <a
                  href="https://github.com/ARYAN38-eng/ThyroidCancer"
                  target="_blank"
                  className="text-[#f56a6a] hover:text-blue-800 underline"
                >
                  Click Here to Go on Github Page
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-700 mb-1">
                  Project 3
                </h3>
                <h4 className="text-lg font-medium text-gray-600 mb-3">
                  Road Accident Recognition
                </h4>
                <a
                  href="https://github.com/ARYAN38-eng/RoadAccidentRecognizer"
                  target="_blank"
                  className="text-[#f56a6a] hover:text-blue-800 underline"
                >
                  Click Here to Go on Github Page
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-700 mb-1">
                  Project 4
                </h3>
                <h4 className="text-lg font-medium text-gray-600 mb-3">
                  Watches Price Predictor
                </h4>
                <a
                  href="https://github.com/ARYAN38-eng/watchesapp"
                  target="_blank"
                  className="text-[#f56a6a] hover:text-blue-800 underline"
                >
                  Click Here to Go on Github Page
                </a>
              </div>
            </div>
          </section>
        </div>
        </div>
    </main>
  );
};

export default Projects;
