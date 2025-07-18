import React from "react";

const Footer = ({activesidebar}) => {
  return (
    <footer className="mt-20 ">
      <div className={`flex bg-[#F56A6A] md:bg-white  flex-col w-full md:w-auto items-center transition-all duration-400 ease-in ${activesidebar ? "md:ml-90" : "ml-[0px]"}  text-white md:text-gray-400 md:text-lg p-5 `}>
        <p>
          &copy; {new Date().getFullYear()} Aryan Raina. All rights reserved.
        </p> 
        <p>Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
