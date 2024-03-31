import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logoF from "../assets/logoF.png";
import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu == false ? (
        <nav className=" w-full">
          <div
            className={`${
              location.pathname == "/"
                ? "sticky top-0 text-white flex"
                : "sticky top-0 text-black flex"
            } z-10 flex justify-between items-center p-10`}
          >
            <Link to="/" className="logo flex justify-center cursor-pointer">
              <div className=" w-[30vw] hidden md:block">
                <img src={logoF} alt="logo" />
              </div>
              <div className=" w-[30vw] md:hidden">
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className="menus justify-between items-center gap-5 flex">
              <ul className="flex max-lg:hidden justify-between items-center gap-8 ">
                <Link to="/">
                  <li className=" text-xl cursor-pointer hover:list-disc">
                    <span className=" -ml-2">Home</span>
                  </li>
                </Link>

                <Link className=" group relative">
                  <li className=" text-xl cursor-pointer group-hover:list-disc">
                    <div className=" flex items-center -ml-2">
                      About Us
                      <FaChevronDown className=" text-sm group-hover:-rotate-90 transition-all" />
                    </div>
                    <ul className=" absolute w-52 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg">
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Our Mission
                        </li>
                      </Link>
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Our Team
                        </li>
                      </Link>
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Careers
                        </li>
                      </Link>
                    </ul>
                  </li>
                </Link>
                <Link className=" group relative">
                  <li className=" text-xl cursor-pointer group-hover:list-disc">
                    <div className=" flex items-center -ml-2">
                      Research
                      <FaChevronDown className=" text-sm group-hover:-rotate-90 transition-all" />
                    </div>
                    <ul className=" absolute w-52 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg">
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Research Program
                        </li>
                      </Link>
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Research Portfolio
                        </li>
                      </Link>
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Partnerships
                        </li>
                      </Link>
                    </ul>
                  </li>
                </Link>

                <Link to="/investments">
                  <li className=" text-xl cursor-pointer list-none hover:list-disc">
                    <span className=" -ml-2">Invesments</span>
                  </li>
                </Link>
                <Link className=" group relative">
                  <li className=" text-xl cursor-pointer group-hover:list-disc">
                    <div className=" flex items-center -ml-2">
                      Impact
                      <FaChevronDown className=" text-sm group-hover:-rotate-90 transition-all" />
                    </div>
                    <ul className=" absolute w-52 hidden group-hover:block bg-white p-2 rounded-lg shadow-lg">
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          News
                        </li>
                      </Link>
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Blogs
                        </li>
                      </Link>
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Events
                        </li>
                      </Link>
                      <Link>
                        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Newsletters
                        </li>
                      </Link>
                    </ul>
                  </li>
                </Link>
              </ul>
              <div className=" flex justify-center items-center">
                <Link>
                  <button className=" text-md text-white font-medium uppercase py-1 px-7 bg-[#1F98B5]  rounded-full cursor-pointer">
                    Donate
                  </button>
                </Link>
                <div
                  onClick={() => setMenu(!menu)}
                  className=" text-5xl cursor-pointer font-bold hidden max-lg:block"
                >
                  <IoMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div
          className={`w-full h-[140vh] z-10 bg-[#00159E] relative overflow-hidden transition-all`}
        >
          <div className=" ">
            <div
              onClick={() => setMenu(!menu)}
              className=" text-2xl p-8 max-md:p-6 max-md:text-2xl max-md:top-0 rounded-full absolute top-5 -right-8 bg-white text-cyan-400 cursor-pointer"
            >
              <ImCross />
            </div>
            <div className="content m-20 flex justify-between max-md:flex-col gap-10">
              <div className="leftContent flex flex-col justify-start gap-10">
                <Link to="/">
                  <div className=" w-[30vw] max-md:w-72 ">
                    <img src={logoF} alt="logo" />
                  </div>
                </Link>
                <div className="menus flex">
                  <ul className="flex flex-col text-slate-300 ">
                    <Link to="/">
                      <li className=" text-2xl border-b border-slate-400 py-3 px-20 hover:text-cyan-500">
                        <span className=" -ml-2">Home</span>
                      </li>
                    </Link>

                    <Link className=" group ">
                      <li className=" text-2xl border-b border-slate-400 py-3 px-10">
                        <div className=" flex justify-between items-center hover:text-cyan-500">
                          About Us
                          <FaChevronDown className=" text-sm group-hover:-rotate-90 transition-all" />
                        </div>
                        <ul className=" absolute transition-all duration-1000 -right-[100%] w-52 top-56 group-hover:right-[60%] max-sm:group-hover:right-[30%] max-lg:top-72 bg-white p-2 rounded-lg shadow-lg">
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Our Mission
                            </li>
                          </Link>
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Our Team
                            </li>
                          </Link>
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Careers
                            </li>
                          </Link>
                        </ul>
                      </li>
                    </Link>
                    <Link className=" group ">
                      <li className=" text-2xl border-b border-slate-400 py-3 px-10 ">
                        <div className=" flex justify-between items-center -ml-2 hover:text-cyan-500">
                          Research
                          <FaChevronDown className=" text-sm group-hover:-rotate-90 transition-all" />
                        </div>
                        <ul className=" absolute -right-[100%] transition-all duration-1000 w-70 top-64 group-hover:right-[58%] max-sm:group-hover:right-[30%] max-lg:top-80 bg-white p-2 rounded-lg shadow-lg">
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Research Program
                            </li>
                          </Link>
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Research Portfolio
                            </li>
                          </Link>
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Partnerships
                            </li>
                          </Link>
                        </ul>
                      </li>
                    </Link>

                    <Link to="/investments">
                      <li className=" text-2xl border-b border-slate-400 py-3 px-10 cursor-pointer list-none hover:text-cyan-500">
                        <span className=" -ml-2">Invesments</span>
                      </li>
                    </Link>
                    <Link className=" group relative">
                      <li className=" text-2xl border-b border-slate-400 py-3 px-10 ">
                        <div className=" flex justify-between items-center -ml-2 hover:text-cyan-500">
                          Impact
                          <FaChevronDown className=" text-sm group-hover:-rotate-90 transition-all" />
                        </div>
                        <ul className=" absolute -right-[600%] transition-all duration-1000 w-70 top-14 group-hover:right-[0%] bg-white p-2 rounded-lg shadow-lg">
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              News
                            </li>
                          </Link>
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Blogs
                            </li>
                          </Link>
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Events
                            </li>
                          </Link>
                          <Link>
                            <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Newsletters
                            </li>
                          </Link>
                        </ul>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="rightContent flex flex-col justify-start gap-10">
                <Link>
                  <button className=" text-md text-white font-medium uppercase py-1 px-7 bg-[#1F98B5]  rounded-full cursor-pointer">
                    Donate
                  </button>
                </Link>
                <div className="socialSide text-white text-2xl flex gap-5">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
