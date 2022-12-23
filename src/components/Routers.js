import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "./About";
import Bookmark from "./Bookmarks";

function Routers() {
  return (
    <div className=" bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 App">
      <div className="h-0.5 w-full bg-slate-700 rounded" />
      <div className="p-4">
        <header className="text-gray-600 body-font">
          <div className="  flex  p-5 flex-row  justify-between items-center">
            <div className="flex flex-row">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img
                  width="50px"
                  className=" bg-neutral-800 "
                  src="https://lh5.googleusercontent.com/-2jDKcCPrlrE/AAAAAAAAAAI/AAAAAAAAAAA/NeRzp5gKxvg/s88-p-k-no-ns-nd/photo.jpg"
                  // src="https://cdn.mybrowseraddon.com/icons/access-control-allow-origin48.png"
                />
                <span className="ml-3 text-xl">WOOKIE MOVIES</span>
              </a>
            </div>
            <div className="flex right-0 flex-row">
              <input
                type="search"
                className="ml-96 p-3 border-solid text-gray-700 bg-white bg-clip-padding border  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                // className="form-control relative  min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <span
                className="input-group-text mt-2   items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                id="basic-addon2 "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/book" element={<Bookmark />} />
        </Routes>
      </div>
    </div>
  );
}

export default Routers;
