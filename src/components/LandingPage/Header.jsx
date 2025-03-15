import React, { useState } from "react";
import { logo } from "../../assets";
import { nav } from "../../constant";
import Button from "./Button";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isCareerHovered, setIsCareerHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleEducationMenu = () => {
    setIsEducationOpen((prev) => !prev);
  };

  const toggleCareer = () => {
    setIsCareerHovered(!isCareerHovered)
  }

  return (
    <header className="w-full py-10">
      <div className="content flex items-center justify-between gap-7">
        <div className="w-[150px] lg:w-[190px] xl:w-[200px] h-auto">
          <a href="#">
            <img src={logo} alt="logo" className="w-full h-auto" />
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-textBlue">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* <div className="flex items-center justify-center content-start gap-4">
           
          </div> */}
        </div>

        <nav
          className={`${menuOpen ? "block" : "hidden"} absolute top-[100px] left-0 w-full bg-white lg:bg-transparent lg:relative lg:top-0 lg:block lg:w-auto`}
        >
          <ul className="text-lg lg:text-base xl:text-lg font-lexend font-medium flex flex-col lg:flex-row items-center justify-center gap-4 p-5 lg:p-0">
            {nav.map((navs) => (
              <li
                key={navs.id}
                className="relative group"
              >
                 {navs.text === "Education" ? (
                  <button
                    onMouseEnter={() => navs.text === "Education" && setIsEducationOpen(true)}
                    onMouseLeave={() => navs.text === "Education" && setIsEducationOpen(false)}
                    onClick={toggleEducationMenu}
                    className={`${
                      isEducationOpen ? "text-primary underline" : "hover:text-primary hover:underline"
                    } transition-all duration-300 py-2 block cursor-pointer`}
                  >
                    {navs.text}
                  </button>
                ) : (
                  <a
                    href={navs.link}
                    className="hover:text-primary hover:underline transition-all duration-300 py-2 block"
                  >
                    {navs.text}
                  </a>
                )}

                {navs.text === "Education" && isEducationOpen && (
                  <div className={`absolute top-full  bg-white shadow-lg z-50 flex transition-all duration-300
                     ${isCareerHovered ? "w-500px left-[-165px] md:left-0 " : "w-250px left-0"}`} 
                     onMouseEnter={() => setIsEducationOpen(true)} 
                     onMouseLeave={() => {setIsCareerHovered(false); setIsEducationOpen(false);}}>
                    <div className="w-1/2 p-4">
                      <ul>
                        <li
                          className="px-4 py-2 hover:text-primary text-base flex items-center justify-between cursor-pointer whitespace-nowrap"
                          onMouseEnter={() => setIsCareerHovered(true)}
                          onClick={toggleCareer}
                          //  onMouseLeave={() => setIsCareerHovered(false)}
                        >
                          Career paths
                          {isCareerHovered && <ChevronRight size={16} className="ml-1 text-primary" />}
                        </li>
                        <li className="px-4 py-2 text-base hover:text-primary whitespace-nowrap cursor-pointer"
                        onMouseEnter={() => setIsCareerHovered(false)}>User Portal</li>
                      </ul>
                    </div>

                    {isCareerHovered && (
                      <div className="w-1/2 p-4 text-sm border-l whitespace-nowrap">
                        <ul>
                          <li className="px-4 py-2 hover:bg-gray-100">Ai and Data Scientist</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Ai Engineer</li>
                          <li className="px-4 py-2 hover:bg-gray-100">API Designer</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Backend Developer</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Blockchain</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Cybersecurity</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Data Analyst</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Frontend Developer</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Game Developer(Client)</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Game Developer(Server)</li>
                          <li className="px-4 py-2 hover:bg-gray-100">Ui/Ux Designer</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}

            <div className="flex flex-row justify-center lg:hidden w-full gap-4 mt-5">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-white !text-black">Sign Up</Button>
            </Link>
            </div>
          </ul>
        </nav>

        <div className="hidden lg:flex items-center justify-center content-start gap-4">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-white !text-black">Sign Up</Button>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;