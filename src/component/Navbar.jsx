/* eslint-disable jsx-a11y/control-has-associated-label */
import { React, useState } from 'react';

function Navbar() {
  const [hideElement, setHideElement] = useState(true);

  // add event listners
  const HandleClick = () => {
    setHideElement((prev) => !prev);
  };

  return (
    <nav>
      <div className="navbar h-24 fixed top-0 justify-between bg-white items-center">
        {/* Left side Navbar */}
        <div className="ml-8">
          <img alt="none" src="none" />
          <div className="text-black">Aurele Guitard</div>
        </div>
        {/* Right side Navbar */}
        <div className="hidden md:flex gap-6 mr-8">
          {/* Need to refractor css for buttons */}
          <button
            className="btn px-7 border-transparent rounded-3xl bg-white text-black hover:bg-white hover:border-gray-500 transition duration-500"
            type="button"
          >
            ABOUT
          </button>
          <button
            className="btn px-7 border-transparent rounded-3xl bg-white text-black hover:bg-white hover:border-gray-400 transition duration-500"
            type="button"
          >
            PROJECTS
          </button>
          <button
            className="btn px-7 border-transparent rounded-3xl bg-white text-black hover:bg-white hover:border-gray-400 transition duration-500"
            type="button"
          >
            EXPERIENCE
          </button>
          <button
            className="btn px-7 border-transparent rounded-3xl bg-white text-black hover:bg-white hover:border-gray-400 transition duration-500"
            type="button"
          >
            CONTACT
          </button>
        </div>
        <div className="md:hidden pr-5">
          <button
            type="button"
            className="mobile-menu-button"
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
        <div className="absolute mobile-menu md:hidden bg-red-700 text-black w-80">
          <a href="/#">ABOUT</a>
          <a href="/#">PROJECTS</a>
          <a href="/#">EXPERIENCE</a>
          <a href="/#">CONTACT</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
