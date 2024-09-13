import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ChangeUser from "./ChangeUser";

const ButtonPopUp = ({ popClose }) => {
  const [userModal, setUserModal] = useState(false);

  return (
    <div
      className={` bpp p-5 bg-white rounded-md w-[10em]  shadow-xl bg white absolute top-[50%] right-28 flex items-start gap-2 flex-col z-50`}
    >
      <button className="flex items-center gap-2" onClick={popClose}>
        <FaTrash /> <p>Delete User</p>
      </button>
      <button
        className="flex items-center gap-2"
        onClick={() => setUserModal(true)}
      >
        <FaEdit />
        <p>Edit User</p>
      </button>
      {userModal && <ChangeUser modalClose={() => setUserModal(false)} />}
    </div>
  );
};

export default ButtonPopUp;
