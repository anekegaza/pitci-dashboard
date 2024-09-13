import React, { useMemo, useState } from "react";
import { UserData } from "../assets";
import { BiDotsVertical, BiUserPlus } from "react-icons/bi";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import AddUserModal from "../assets/Components/AddUserModal";
import ButtonPopUp from "../assets/Components/ButtonPopUp";
import ChangeUser from "../assets/Components/ChangeUser";

const personal = () => {
  const data = useMemo(() => UserData, []);
  const [modalOpen, setmodalOpen] = useState(false);
  const [popClose, setPopClose] = useState(false);
  const [userModal, setUserModal] = useState(false);

  /** @type import('@tanstack/react-table').ColumnDef(any) */
  const [columns, setColumns] = useState([
    {
      header: "Users",
      accessorKey: "User",
    },
    {
      header: "Roles",
      accessorKey: "Role",
    },
    {
      header: "Status",
      accessorKey: "Status",
      cell: (info) => (
        <span
          style={{
            color: info.getValue() === "Active" ? "green" : "gray",
          }}
        >
          {info.getValue()}
        </span>
      ),
    },
    {
      header: "",
      accessorKey: "icon",
      cell: ({ value }) => (
        <button className="" onClick={() => setPopClose(true)}>
          <BiDotsVertical />
        </button>
      ),
    },
  ]);

  const buttons = "p-2 bg-slate-100 rounded-md text-sm font-inter";

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleDeleteColumn = (targetIndex) =>
    setColumns(columns.filter((_, index) => index !== targetIndex));

  return (
    <div>
      {/* =====================PERSONNEL */}
      <div className={`border-b p-4 mb-2 overflow-hidden`}>
        <h2 className="font-bold text-black text-xl font-bricolage">
          Personnel
        </h2>
        <p className="text-[#667085] font-inter text-sm">
          An overview of the status of all personnel
        </p>
      </div>
      {/* ==================================== USERS AND ADD PLACE ========================= */}
      <div className="flex items-center justify-between p-4">
        <div>
          <p> {`${data.length + " Users"}`} </p>
        </div>
        <div
          className="p-2 bg-[#196100] flex items-center gap-2 text-white shadow-sm rounded-md cursor-pointer"
          onClick={() => setmodalOpen(true)}
        >
          <BiUserPlus />
          <p>Add new User</p>
        </div>
      </div>

      {/* ========================== TABLE GOES HERE ============================== */}
      <div className="w3-container w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl font-bricolage"> </h2>
        </div>
        {popClose && <ButtonPopUp popClose={() => setPopClose(false)} />}

        <table className="w3-table border-0 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-slate-100 rounded-full ">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className=" first:rounded-l-md last:rounded-r-md text-slate-500 flex "
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className=" border-b">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="relative">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center gap-4 py-5">
          <button
            className={`${buttons}`}
            onClick={() => table.setPageIndex(0)}
          >
            First Page
          </button>
          <button
            className={`${buttons}`}
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous Page
          </button>
          <button
            className={`${buttons}`}
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next Page
          </button>
          <button
            className={`${buttons}`}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            Last Page
          </button>
        </div>
      </div>
      {modalOpen && <AddUserModal modalClose={() => setmodalOpen(false)} />}
      {userModal && <ChangeUser modalClose={() => setUserModal(false)} />}
    </div>
  );
};

export default personal;
