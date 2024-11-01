import React, { useState } from 'react';
import logo from '../Images/logo utama dpm.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isSinergiOpen, setIsSinergiOpen] = useState(false);
const [isAksiOpen, setIsAksiOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

return (
    <div className='fixed w-full bg-white'>
    <div className='flex mx-10 my-2 h-20 items-center justify-between'>
    <Link to="/">
        <div className='flex items-center'>
        <img src={logo} alt="logo DPM FIA UB" className='h-12 w-12' />
        <div className='h-full flex items-center w-full'>
            <h1 className='font-AGBold text-3xl'>DPM <i>FIA UB</i></h1>
        </div>
        </div>
    </Link>
        <div className='flex items-center'>
        <svg
            className='h-8 w-8 text-black cursor-pointer z-10'
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
        }`}>
        <div className='p-10 mt-20 w-full'>
        <div
            className='cursor-pointer py-5 flex justify-between items-center w-full'
            onClick={() => setIsSinergiOpen(!isSinergiOpen)}
        >
            <span className='font-SFBolditalic lg:text-3xl'>SINERGI</span>
            <span>
            {isSinergiOpen ? (
                <svg 
                width="12" 
                height="23" 
                viewBox="0 0 12 23" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M11 16.5C7.46545 13.0266 6.3003 10.8566 6 6.5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                <path 
                    d="M1 16.5C4.53455 13.0266 5.6997 10.8566 6 6.5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                </svg>
                
            ) : (
                <svg 
                width="12" 
                height="23" 
                viewBox="0 0 12 23" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M1 6.5C4.53455 9.97344 5.6997 12.1434 6 16.5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                <path 
                    d="M11 6.5C7.46545 9.97344 6.3003 12.1434 6 16.5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                </svg>
            )}
            </span>
        </div>
        {isSinergiOpen && (
            <div className='ml-4 font-SFBolditalic lg:text-xl'>
            <Link to="#about" className='block p-2'>ABOUT</Link>
            <Link to="#thisyear" className='block p-2'>THIS YEAR</Link>
            <Link to="/People" className='block p-2'>PEOPLE</Link>
            </div>
        )}
        <div
            className='cursor-pointer py-5 flex justify-between items-center'
            onClick={() => setIsAksiOpen(!isAksiOpen)}
        >
            <span className='font-SFBolditalic lg:text-3xl '>AKSI</span>
            <span>
            {isAksiOpen ? (
                <svg 
                width="12" 
                height="23" 
                viewBox="0 0 12 23" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M11 16.5C7.46545 13.0266 6.3003 10.8566 6 6.5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                <path 
                    d="M1 16.5C4.53455 13.0266 5.6997 10.8566 6 6.5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                </svg>
                
            ) : (
                <svg 
                width="12" 
                height="23" 
                viewBox="0 0 12 23" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M1 6.5C4.53455 9.97344 5.6997 12.1434 6 16.5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                <path 
                    d="M11 6.5C7.46545 9.97344 6.3003 12.1434 6 16.5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round"/>
                </svg>
            )}
            </span>
        </div>
        {isAksiOpen && (
            <div className='ml-4 font-SFBolditalic lg:text-xl'>
            <Link to="/Programs" className='block p-2'>PROGRAMS</Link>
            <Link to="#aksi2" className='block p-2'>MONITORING</Link>
            <Link to="#aksi2" className='block p-2'>FIND US</Link>
            </div>
        )}
        </div>
    </div>
    </div>
);
}