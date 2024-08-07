import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { FaSearch, FaSortDown, FaSortUp } from "react-icons/fa";
import { BiFilterAlt, BiSort, BiSortDown } from "react-icons/bi";
import { Kbd } from "@chakra-ui/react";

const BasicTable = ({ data, columns }) => {
  const buttons = "p-2 bg-slate-100 rounded-md text-sm font-inter";
  const filterButtons =
    "p-2 bg-slate-100 rounded-md text-sm font-inter flex gap-2 items-center";

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="w3-container w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Recent Pitches</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between py-2 px-3 gap-2  rounded-md border">
            <FaSearch className="cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
              className="border-0 outline-0 bg-transparent "
            />
          </div>
          <p className={`${filterButtons}`}>
            <BiSortDown />
            Sort by
            <BiSort />
          </p>
          <p
            className={`${filterButtons}`}
            // onClick={table.column.getToggleSortingHandler()}
          >
            <BiFilterAlt />
            Filter
          </p>
        </div>
      </div>
      <table className="w3-table border-0 ">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-slate-100 rounded-full">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className=" first:rounded-l-md last:rounded-r-md text-slate-500 flex"
                // onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {
                  { asc: <FaSortUp />, desc: <FaSortDown /> }[
                    header.column.getIsSorted() ?? null
                  ]
                }
              </th>
            ))}
          </tr>
        ))}

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className=" border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center gap-4 py-5">
        <button className={`${buttons}`} onClick={() => table.setPageIndex(0)}>
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
  );
};

export default BasicTable;
