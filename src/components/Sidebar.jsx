import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ activesidebar,toggleSidebar }) => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again later.");
        }
      );
    e.target.reset();
  };
  const [formOpen, setformOpen] = useState(false);

  return (
    <>
      <aside
        className={`w-[55%] lg:w-[20%] h-[100vh] z-20 lg:z-auto lg:h-auto bg-[#f5f6f7] min-h-screen fixed top-0 left-0   transform ${
          activesidebar
            ? "-translate-x-full md:translate-x-0"
            : "translate-x-0 md:-translate-x-full"
        } transition-transform duration-400 ease-in`}
      >
        <div className="sidebar">
          <div className="Menu">
            <div className="flex items-center">
              <h6 className="text-[#3D4449] w-[30%]  text-xl font-semibold border-b-3 pb-2 ml-5 pt-5 border-[#f56969]">
                Menu
              </h6>
              <div onClick={toggleSidebar} className="block lg:hidden ml-20 md:ml-80  text-4xl lg:text-7xl mt-3 lg:mt-5">
                &times;
              </div>
            </div>

            <Link
              to="/"
              className="block w-[70%] lg:w-[85%] text-[#3d4449] ml-5 mt-13  text-sm pb-4 border-b-1 border-gray-300 hover:text-[#f56969]"
            >
              HOMEPAGE
            </Link>
            <Link
              to="/qualifications"
              className="block w-[70%] lg:w-[85%] text-[#3d4449] ml-5 mt-4  text-sm pb-4 border-b-1 border-gray-300 hover:text-[#f56969]"
            >
              QUALIFICATIONS
            </Link>
            <Link
              to="/projects"
              className="block w-[70%] lg:w-[85%] text-[#3d4449] ml-5 mt-4 text-sm pb-15 border-b-1 border-gray-300 hover:text-[#f56969]"
            >
              PROJECTS
            </Link>
          </div>

          <div className="touch mt-10 ml-5 text-xl font-semibold text-[#3D4449] border-b-3 pb-2 border-[#f56969] w-[70%]  lg:w-[40%]">
            Get in touch
          </div>
          <p className="mt-10 ml-5 text-gray-400 w-[80%] lg:w-auto lg:text-base">
            Let’s connect! You can reach me through any of the channels below:
          </p>
          <div className="email w-[85%] flex lg:block mt-5 ml-5 transform hover:scale-110 transition duration-400 pb-4 border-b-1 border-gray-300">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#f56969] mr-2"
            />
            <span
              onClick={() => setformOpen(!formOpen)}
              className="text-gray-400 underline  decoration-dotted cursor-pointer text-xs lg:text-base"
            >
              aryanraina2021@gmail.com
            </span>
          </div>
          {formOpen && (
            <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white  rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
                <button
                  onClick={() => setformOpen(false)}
                  className="absolute top-5 lg:top-2 right-3 text-gray-500 text-xl hover:text-[#f56969] "
                >
                  &times;
                </button>
                <h2 className="lg:text-xl font-semibold text-[#3D4449] lg:ml-5 mb-4">
                  Send a Message
                </h2>
                <form onSubmit={sendEmail}>
                  <div className="mt-5 lg:ml-5">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="w-full p-2 border border-gray-300 rounded mb-3"
                      required
                    />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="w-full p-2 border border-gray-300 rounded mb-3"
                      required
                    />
                    <textarea
                      placeholder="Your Message"
                      name="message"
                      className="w-full p-2 border border-gray-300 rounded mb-3 h-24"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#f56969] text-white px-3 lg:px-4 py-3 lg:py-2 rounded hover:bg-[#e05555] transition"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <FontAwesomeIcon
            icon={faPhone}
            className="text-[#f56969] ml-5 mt-5"
          />
          <a
            href="tel:+917889375883"
            className="text-gray-400  ml-1 underline decoration-dotted cursor-pointer text-base"
          >
            (+91)7889375883
          </a>
          <div className="flex items-start  ml-5  text-[#f56969] text-sm w-[85%] pb-10 border-b-1 border-gray-300">
            <FontAwesomeIcon
              icon={faHome}
              className="text-[#f56969] mr-1 mt-1"
            />
            <a
              className="mr-10 leading-snug hover:text-[#d94848] transition duration-200 text-base"
              href="https://maps.app.goo.gl/fLhuLhcT3XcFbnAe9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zolo bravoos, Mukai Nagar,Hinjewadi Phase 1, Pune, 411057
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
