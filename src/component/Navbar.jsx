/* eslint-disable jsx-a11y/control-has-associated-label */
import { React, useState } from 'react';

function Navbar() {
  const [hideElement, setHideElement] = useState(true);

  // add event listners for mobile menu
  const HandleClick = () => {
    setHideElement((prev) => !prev);
  };

  return (
    <nav className="bg-[#F5F3F0] max-w-full">
      <div className="navbar h-24 top-0 justify-between items-center w-screen-xl px-4 py-8">
        {/* Left side Navbar */}
        <div className="">
          {/* <img alt="none" ="none" /> */}
          <div className="">
            <div className="text-black font-semibold">AURELE</div>
            <div className="text-black font-semibold">GUITARD</div>
          </div>
        </div>
        {/* Right side Navbar */}
        <div className="hidden md:flex gap-6">
          {/* Need to refractor css for buttons */}
          <button className="nav-buttons" type="button">
            ABOUT
          </button>
          <button className="nav-buttons" type="button">
            PROJECTS
          </button>
          <button className="nav-buttons" type="button">
            EXPERIENCE
          </button>
          <button className="nav-buttons" type="button">
            CONTACT
          </button>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="mobile-menu-button px-1 py-1 border border-gray-400 rounded-md"
            onClick={HandleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              color="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {!hideElement && (
        <div className="flex flex-col items-center bg-[#F5F3F0] md:hidden h-72 gap-10">
          <a className="mobile-menu-links" href="/#">
            ABOUT
          </a>
          <a className="mobile-menu-links" href="/#">
            PROJECTS
          </a>
          <a className="mobile-menu-links" href="/#">
            EXPERIENCE
          </a>
          <a className="mobile-menu-links" href="/#">
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
