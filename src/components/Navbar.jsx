import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ toggleSidebar, activesidebar }) => {
  return (
    <nav className="w-full md:w-[100%] bg-white fixed z-10 ">
      <div className={`${activesidebar ? "md:w-[80%]" : "md:w-full"} transition-all duration-400 ease-in`}>
        <div className="navbar">
          <img
            className="pl-5 pt-6 cursor-pointer"
            src="/hamburger.svg"
            alt="Menu"
            onClick={toggleSidebar}
          />
          <div className="subnav text-[#3D4449] w-[85%] lg:w-[90%] text-base flex justify-between mt-6 ml-10 md:ml-20 font-opensans font-semibold border-b-6 pb-5 border-[#F56A6A]">
            <p>
              ARYAN's <span className="text-gray-500 font-normal ml-1">PORTFOLIO</span>
            </p>
            <div className="social-medias">
              {/* <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} className="mx-2 text-gray-400 text-xl" />
              </a> */}
              <a href="https://www.instagram.com/_aryan_kamal_raina_/">
                <FontAwesomeIcon icon={faInstagram} className="mx-2 text-gray-400 text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/aryanraina2021">
                <FontAwesomeIcon icon={faLinkedin} className="mx-2 text-gray-400 text-xl" />
              </a>
              <a href="https://github.com/ARYAN38-eng?tab=repositories">
                <FontAwesomeIcon icon={faGithub} className="mx-2 text-gray-400 text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;

