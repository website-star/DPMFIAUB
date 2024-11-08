import React, { useState } from 'react';
import logo from '../Images/logo utama dpm.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSinergiOpen, setIsSinergiOpen] = useState(false);
  const [isAksiOpen, setIsAksiOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed w-full bg-white min-w-96 z-50">
      <div className="flex mx-10 my-2 h-20 items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo DPM FIA UB" className="h-12 w-12" />
            <div className="h-full flex items-center w-full">
              <h1 className="font-AGBold text-3xl">DPM <i>FIA UB</i></h1>
            </div>
          </div>
        </Link>
        <div className="flex items-center">
          <svg
            className={`h-8 w-8 text-black cursor-pointer z-10 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={toggleMenu}
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 lg:w-1/3 w-full h-screen bg-white shadow-lg flex transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-10 mt-20 w-full">
          
          <div
            className="cursor-pointer py-5 flex justify-between items-center w-full"
            onClick={() => setIsSinergiOpen(!isSinergiOpen)}
          >
            <span className="font-SFBolditalic lg:text-3xl">SINERGI</span>
            <span
              className={`transform transition-transform duration-300 ${isSinergiOpen ? 'rotate-180' : ''}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          {isSinergiOpen && (
            <div className="ml-4 font-SFBolditalic lg:text-xl">
              <Link to="/about" className="block p-2" onClick={closeMenu}>ABOUT</Link>
              <Link to="/thisyear" className="block p-2" onClick={closeMenu}>THIS YEAR</Link>
              <Link to="/people" className="block p-2" onClick={closeMenu}>PEOPLE</Link>
            </div>
          )}

          
          <div
            className="cursor-pointer py-5 flex justify-between items-center"
            onClick={() => setIsAksiOpen(!isAksiOpen)}
          >
            <span className="font-SFBolditalic lg:text-3xl ">AKSI</span>
            <span
              className={`transform transition-transform duration-300 ${isAksiOpen ? 'rotate-180' : ''}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          {isAksiOpen && (
            <div className="ml-4 font-SFBolditalic lg:text-xl">
              <Link to="/programs" className="block p-2" onClick={closeMenu}>PROGRAMS</Link>
              <Link to="#" className="block p-2" onClick={closeMenu}>JARING ASMARA</Link>
              <Link to="/produkhukum" className="block p-2" onClick={closeMenu}>PRODUK HUKUM</Link>
              <Link to="#" className="block p-2" onClick={closeMenu}>PRESS RELEASE</Link>
              <Link to="/monitoring" className="block p-2" onClick={closeMenu}>MONITORING</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
