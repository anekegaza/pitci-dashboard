import React, { useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import "./sidebar.css";
import { OTHERLINKS, sideLinks } from "..";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const activeMenu = true;
  const [open, setOpen] = useState(true);

  return (
    <>
      <div
        className={`${
          open ? "w-64" : "w-10"
        } flex flex-col duration-300 relative top-0 right-0`}
      >
        <div className="head flex items-center justify-between border-b pb-4 ">
          <div className="initial h-1 w-1 p-5 flex items-center justify-center rounded-full bg-lime-200">
            <h1 className=" ini">AI</h1>
          </div>

          <div
            className={`name flex items-start justify-center flex-col ${
              !open && "scale-0"
            }`}
          >
            <h3 className="text-black font-bold leading-none">Allen Iverson</h3>
            <p className=" text-slate-500">alleniverson@pitci.com</p>
          </div>
          <div className="bg">
            <FaChevronDown className={`${!open && "hidden"}`} />
          </div>
        </div>
        <div className="main">
          <div className="flex items-center relative">
            <h2 className={`${!open && "scale-0"}`}>MAIN</h2>
            <FaBars
              onClick={() => setOpen(!open)}
              className="absolute cursor-pointer right-[1rem] top-1 z-10 hover:bg-lime-200 hover:p-2 hover:rounded-full"
            />
          </div>
          <ul className="lists">
            <li>
              {sideLinks.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 justify-between items-center my-2 p-2 rounded-md hover:bg-lime-100 cursor-pointer"
                >
                  <Link
                    className="flex justify-between items-center gap-2"
                    to={item.url}
                  >
                    <span className="text-lime-800"> {item.icon} </span>
                    <h3 className={`${!open && "hidden"}`}> {item.label}</h3>
                  </Link>
                  <span className={`${!open && "hidden"} text-lime-800`}>
                    {item.end}
                  </span>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <div className="others">
          <h2 className={`${!open && "hidden"}`}>OTHERS</h2>
          <div>
            {OTHERLINKS.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 justify-between items-center my-2 p-2 rounded-md  hover:bg-lime-100 cursor-pointer"
              >
                <Link
                  className="flex justify-between items-center gap-2"
                  to={item.url}
                >
                  <span className="text-lime-800"> {item.icon} </span>
                  <h3 className={`${!open && "hidden"}`}> {item.label}</h3>
                </Link>
                <span className={`${!open && "hidden"} text-lime-800`}>
                  {item.end}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
