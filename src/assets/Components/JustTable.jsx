import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";

const BasicTable = ({ data, columns }) => {
  const buttons = "p-2 bg-slate-100 rounded-md text-sm font-inter";

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w3-container w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl font-bricolage"> </h2>
      </div>
      <table className="w3-table border-0 ">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-slate-100 rounded-full">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className=" first:rounded-l-md last:rounded-r-md text-slate-500 flex"
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
