import React from "react";
import "./header.css";
import pitci from "../images/pitcilogo.svg";
import {
  FaRegBell,
  FaRegClock,
  FaRegQuestionCircle,
  FaSearch,
} from "react-icons/fa";
import { Kbd } from "@chakra-ui/react";

const Header = () => {
  const headerIcons = " text-neutral-400 bg-transparent text-xl";
  return (
    <>
      <div className="header items-center flex border-b px-2">
        <div className="inhead flex items-center justify-between w-[76%]">
          <div className="flex items-center">
            <img src={pitci} alt="" />
          </div>
          <div className="flex items-center justify-between py-4 px-4 gap-2 border-r">
            <div className="flex items-center justify-between py-2 px-3 gap-2 bg-slate-50 rounded-md border">
              <FaSearch className="cursor-pointer" />
              <input
                type="text"
                name="search"
                id="search"
                className="border-0 outline-0 bg-transparent "
              />
              <div className="flex items-center gap-2">
                <span className="">
                  <Kbd className="bg-white cursor-pointer">ctrl</Kbd>
                </span>
                <span>
                  <Kbd className="cursor-pointer">F</Kbd>
                </span>
              </div>
            </div>
            <FaRegQuestionCircle className={headerIcons} />
            <FaRegBell className={headerIcons} />
          </div>
        </div>
        <div className="flex items-center gap-3 px-3">
          <FaRegClock className={headerIcons} />
          <p className="text-black text-xl">Activity</p>
        </div>
      </div>
    </>
  );
};

export default Header;
