import React, { useState } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // Number of rows per page

  // Calculate indexes for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const nextPage = () => {
    if (indexOfLastRow < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      <div className="ml-auto flex gap-4">
        <button   className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <PrinterIcon className="w-4 h-4 " />
          Print
        </button>
        <button   className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <ArrowDownTrayIcon className="w-4 h-4" />
          Export
        </button>
      </div>
      <div className="w-full overflow-y-auto styleScroll pb-2">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(currentRows[0]).map((key, index) => (
                <th
                  key={index}
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentRows.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, index) => (
                  <td
                    key={index}
                    className="px-2 py-4 text-sm text-gray-900"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white py-4"
          aria-label="Pagination"
        >
          <div className="block">
            <p className="text-left text-sm text-gray-700">
              Showing <span className="font-medium">{currentPage}</span> of{" "}
              <span className="font-medium">{Math.ceil(data.length / rowsPerPage)}</span> pages
            </p>
          </div>
          <div className="flex  justify-between sm:justify-end">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={indexOfLastRow >= data.length}
              className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Table;
