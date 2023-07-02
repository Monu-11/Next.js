import React, { FC } from "react";
import Image from "next/image";
import logo from "../assets/logo.jpg";
import shares from "../data/Share";
import companies from "@/data/Company";

const Header: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full bg-white z-10">
        <div className="w-4/5 flex mt-5 justify-around items-center">
          <div>
            <Image src={logo} alt="logo" height={"80"} width={"80"} />
            <p className="ml-6 max-md:ml-4">NSE</p>
          </div>
          <div className="w-4/5 relative">
            <input
              className="border-2 border-gray-300 h-12 px-4 pr-16 rounded-lg bg-slate-300 w-full text-sm focus:outline-none shadow-inner"
              type="search"
              name="search"
              placeholder="Search"
            />
            <div className="absolute top-3 right-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div className="w-1/5 flex mt-5 justify-evenly items-center  max-md:hidden">
          <div>Contact Us</div>
          <div>
            <button className="border border-gray-300 p-4 rounded-md shadow-md">
              SIGN UP
            </button>
          </div>
          <div>
            <button className="border border-gray-300 p-4 rounded-md shadow-md">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
      <div className="z-10">
        <div className="h-8 w-full bg-black z-10 flex text-white justify-evenly overflow-auto">
          {shares.map((ele: any) => (
            <div className="flex flex-row justify-between max-md:w-fit">
              <div className="me-2">{ele.name}</div>
              <div className="me-2">{ele.price}</div>
              <div
                className="me-2"
                style={{
                  color: ele.onChange.includes("-") ? "red" : "green",
                }}
              >
                {ele.onChange}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white">
          <h1 className="uppercase font-semibold text-red-700 ml-10 max-md:ml-5">
            Feature Companies
          </h1>
          <div className="h-24 w-full bg-cyan-100 z-10 flex justify-evenly overflow-auto">
            {companies.map((ele, index) => {
              return (
                <div key={index} className="flex p-4">
                  <Image
                    src={ele.logo}
                    alt={ele.name}
                    height={"60"}
                    width={"60"}
                  />
                  <div className="self-center font-medium text-sky-600 me-2 max-md:hidden">
                    {ele.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
