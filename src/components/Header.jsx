import React, { useContext } from 'react'
import icono  from '../assets/icono.jfif'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MenuContext } from '../hooks/MenuContext';
import { Link } from 'react-scroll';


const Header = () => {
  const {showMenu}= useContext(MenuContext)
  const {setShowMenu}= useContext(MenuContext)
  const handleClick = () => setShowMenu(!showMenu);
    
  return (
    <header className="relative bg-primary w-full h-[80px] flex justify-between items-center px-4 font-bold">
      {/* Logo */}
      <div className="flex transition ease-in-out text-tertiary hover:text-quinary duration-500">
        <img
          src={icono}
          alt="logo"
          className="h-[100px] w-[100px] rounded mt-8"
        />
        <h1 className="ml-1 mt-8"> T </h1>
        <h1 className=" ml-0.5 mt-8"> I </h1>
      </div>
      {/* Menu */}
      <div className=" text-tertiary">
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="functions" smooth={true} duration={500}>
              Funciones
            </Link>
          </li>
        </ul>
      </div>
      {/* Bar */}
      <div onClick={handleClick} className="md:hidden text-tertiary">
        {!showMenu ? <FaBars /> : <FaTimes />}
      </div>
      {/* Menu Mobile */}
      <div
        className={
          !showMenu
            ? "hidden"
            : "bg-primary absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-10"
        }
      >
        <ul className="text-4xl text-tertiary ">
          <li className="py-6">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li className="py-6">
            <Link onClick={handleClick} to="functions" smooth={true} duration={500}>
              Funciones
            </Link>
          </li>
        </ul>
      </div>
      {/* Social Media */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0 text-tertiary">
        <ul>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between w-full items-center"
              href="https://www.linkedin.com/in/carlos-eduardo-gonzalez-henriquez/"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="pl-3 pb-2">Linkedin</h1>
              <FaLinkedin className="text-4xl mb-4" />
            </a>
          </li>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between w-full items-center transition ease-in-out  hover:text-tertiary"
              href="https://github.com/cegh2001"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="pl-5 pb-2">Github</h1>
              <FaGithub className="text-4xl mb-4" />
            </a>
          </li>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between w-full items-center transition ease-in-out  hover:text-tertiary"
              href="mailto:cargonzalez0601@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="pl-5 pb-2">Gmail</h1>
              <BiLogoGmail className="text-4xl mb-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header 
