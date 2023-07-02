"use client";
import React, { useState, FC } from "react";

const Page: FC = () => {
  const [showForum, setShowForum] = useState(true);

  const handleToggleForum = () => {
    setShowForum(true);
  };

  const handleToggleStories = () => {
    setShowForum(false);
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-slate-200">
      {" "}
      <div className="w-full md:w-1/2 bg-cyan-900 flex justify-center md:hidden">
        <button
          className={`${
            showForum
              ? " bg-cyan-900  hover:bg-cyan-950"
              : " bg-cyan-900  hover:bg-cyan-950"
          } text-white p-2 mx-2`}
          onClick={handleToggleForum}
        >
          Discuss Forum
        </button>
        <button
          className={`${
            showForum
              ? " bg-cyan-900  hover:bg-cyan-950"
              : " bg-cyan-900  hover:bg-cyan-950"
          } text-white p-2 mx-2`}
          onClick={handleToggleStories}
        >
          Market Stories
        </button>
      </div>
      <div
        className={`w-full md:w-1/2 ${
          showForum ? "block" : "hidden"
        } md:block bg-white md:bg-transparent overflow-y-auto`}
      >
        <div className="uppercase min-md:hidden font-semibold text-red-700 ml-10">
          Discussion Forum
        </div>
        <div className="font-semibold text-black ml-12">Filters</div>
        <div className="flex flex-wrap justify-center max-md:justify-start items-center mt-2 mx-2 md:mx-10 rounded-md shadow-xl bg-white">
          <div className="p-2">
            <button className="bg-red-700 text-white p-2 rounded-3xl">
              Sector 1
            </button>
          </div>
          <div className="p-2">
            <button className="bg-blue-500 text-white p-2 rounded-3xl">
              Sector 2
            </button>
          </div>
          <div className="p-2">
            <button className="bg-yellow-300 text-white p-2 rounded-3xl">
              Sector 3
            </button>
          </div>
          <div className="p-2 relative">
            <input
              className="border-2 border-gray-300 h-10 px-2 pr-12 pl-8 rounded-3xl bg-slate-300 w-full text-sm focus:outline-none shadow-inner"
              type="search"
              name="search"
              placeholder="Search here"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-4/5 h-64 rounded-md flex items-center shadow-xl bg-white mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h1 className="font-medium me-4">Hello User</h1>
            </div>
            <div>
              <button className="bg-red-700 text-white p-1 font-light rounded-3xl">
                Sector 1
              </button>
            </div>
          </div>
          <div className="w-4/5 h-36 rounded-md flex shadow-xl bg-white mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h1 className="font-medium me-4">Hello User</h1>
            </div>
            <div>
              <button className="bg-blue-500 text-white p-1 font-light rounded-3xl">
                Sector 2
              </button>
            </div>
          </div>
          <div className="w-4/5 h-36 rounded-md flex shadow-xl bg-white mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h1 className="font-medium me-4">Hello User</h1>
            </div>
            <div>
              <button className="bg-yellow-300 text-white p-1 font-light rounded-3xl">
                Sector 3
              </button>
            </div>
          </div>
          <div className="w-4/5 h-36 rounded-md flex shadow-xl bg-white mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h1 className="font-medium me-4">Hello User</h1>
            </div>
            <div>
              <button className="bg-blue-500 text-white p-1 font-light rounded-3xl">
                Sector 2
              </button>
            </div>
          </div>
          <div className="w-4/5 h-36 rounded-md flex  shadow-xl bg-white mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
              <div>
                <h1 className="font-medium me-4">Hello User</h1>
              </div>
              <div>
                <button className="bg-yellow-300 text-white p-1 font-light rounded-3xl">
                  Sector 3
                </button>
              </div>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 ${
          showForum ? "hidden" : "block"
        } md:block bg-white md:bg-transparent overflow-y-auto`}
      >
        <div className="uppercase md:hidden font-semibold text-red-700 ml-10">
          Market Stories
        </div>
        <div className="flex flex-wrap p-4 ml-10">
          <div className="Nse w-full sm:w-2/5 h-32 rounded-lg flex justify-end items-end">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="Nse3 w-full sm:w-2/5 h-32 mt-4 sm:mt-0 ml-0 sm:ml-10 p-2 rounded-lg flex justify-end items-end">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className="Nse1 w-full sm:w-2/5 h-32 mt-4 p-2 rounded-lg flex justify-end items-end">
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
          </div>
          <div className="Nse3 w-full sm:w-2/5 h-32 mt-4 sm:mt-0 ml-0 sm:ml-10 p-2 rounded-lg flex justify-end items-end">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className="Nse1 w-full sm:w-2/5 h-32 mt-4 p-2 rounded-lg flex justify-end items-end">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className="Nse w-full sm:w-2/5 h-32 mt-4 sm:mt-0 ml-0 sm:ml-10 p-2 rounded-lg flex justify-end items-end">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex justify-end items-end">
            <div
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              className="bg-cyan-900 flex justify-center items-center -inset-y-14 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
