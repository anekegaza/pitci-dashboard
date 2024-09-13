import React from "react";
import { FaTimes } from "react-icons/fa";

const AddUserModal = ({ modalClose }) => {
  return (
    <div className="fixed bg-[#00000033] top-0 left-0 flex w-full h-full items-center z-50 justify-center gap-56 modal-container">
      <div className="p-5 bg-white rounded-md w-[25em]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bricolage text-black">Add New User</h2>
          <div className=" p-2 bg-black rounded-full text-white cursor-pointer">
            <FaTimes onClick={() => modalClose()} />
          </div>
        </div>
        <form className="flex flex-col items-start gap-4">
          <input
            type="search"
            placeholder="search for names or emails"
            className="outline-0 border w-full rounded-md p-2 bg-[#6463633f] "
          />
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="uppercase text-xs text-blue-600 font-bold">
              User Details
            </p>
            <input
              type="text"
              placeholder="Enter User Emails"
              className="outline-0 border w-full rounded-md p-2 bg-[#64636317] "
            />
            <input
              type="text"
              placeholder="Enter User Emails"
              className="outline-0 border w-full rounded-md p-2 bg-[#64636317] "
            />
          </div>
          <p className="uppercase text-xs text-blue-600 font-bold">
            User Roles
          </p>
          <div className="flex gap-2 items-center">
            <input type="checkbox" id="Adminitrator" className="block" />
            <label htmlFor="Adminitrator">Adminitrator</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" id="Reviewer" className="block" />
            <label htmlFor="Reviewer">Reviewer</label>
          </div>
          <button
            type="submit"
            className="bg-[#155200] w-full text-white rounded-md text-sm py-3 mt-3"
          >
            Add New User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
