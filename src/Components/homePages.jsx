import React from "react";



function FileDetails() {

    

    const handleClick = () => {
        window.location.href = './checkout';
      };
  return (
    <div className="flex flex-col w-full md:max-w-[800px] mx-auto py-4 px-4  ">
      <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className="sm:bg-white sm:px-6 sm:py-6 sm:shadow sm:rounded-lg  w-full ">
          <div className="bg-primary pb-6 text-gray-900   rounded-t-lg">
            File Details
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div class="flex flex-col sm:flex-row gap-4 ">
              <div className=" sm:w-[50%]">
                <label
                  for="file-no"
                  class="block text-sm font-medium text-gray-700"
                >
                  File No :
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    id="file-no"
                    name="file-no"
                    placeholder="TEMP/CMDA/0224/2023"
                    class=" px-2 py-3 block w-full   rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:w-[50%]">
                <label
                  for="challan-no"
                  class="block text-sm font-medium text-gray-700"
                >
                  Challan No :
                </label>
                <div class="mt-1">
                  <select
                    id="challan-no"
                    name="challan-no"
                    class="px-2 py-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="CMDA/PP/Ch/8112/2023">
                      CMDA/PP/Ch/8112/2023
                    </option>
                    <option value="XYZ/ABC/Ch/1234/2024">
                      XYZ/ABC/Ch/1234/2024
                    </option>
                    <option value="ABC/DEF/Ch/5678/2025">
                      ABC/DEF/Ch/5678/2025
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex gap-4   flex-col sm:flex-row ">
              <div className="flex flex-col gap-2 sm:w-[50%] ">
                <h4 className="block text-sm font-medium text-gray-700">
                  Challan Type :
                </h4>
                <p className="block text-base font-normal text-gray-700">
                  Before Submission{" "}
                  <span className="cursor-pointer text-blue-500">
                    View Details
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:w-[50%]">
                <h4 className="block text-sm font-medium text-gray-700">
                  Owner name :
                </h4>
                <p className="block text-base font-normal text-gray-700">
                  Khushboo{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-[50%] ">
              <h4 className="block text-sm font-medium text-gray-700">
                Case Type :
              </h4>
              <p className="block text-base font-normal text-gray-700">New</p>
            </div>

            <div className="mt-8 overflow-y-auto styleScroll pb-2">
              <table className="divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="bg-gray-200">
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      &nbsp;
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Challan(INR)
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Penalty(INR)
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total(INR)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-2 py-4 text-sm text-gray-900">
                      Payable(INR)
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-900">3724.00</td>
                    <td className="px-2 py-4 text-sm text-gray-900">0.00</td>
                    <td className="px-2 py-4 text-sm text-gray-900">3724.00</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 text-sm text-gray-900">
                      Paid(INR)
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-900">0.00</td>
                    <td className="px-2 py-4 text-sm text-gray-900">0.00</td>
                    <td className="px-2 py-4 text-sm text-gray-900">0.00</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 text-sm text-gray-900">
                      Balance(INR)
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-900">
                      <input
                        type="text"
                        className="form-input w-full "
                        placeholder="Penalty"
                        defaultValue="0.00"
                      />
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-900">
                      <input
                        type="text"
                        className="form-input w-full "
                        placeholder="Penalty"
                        defaultValue="0.00"
                      />
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-900">
                      <input
                        type="text"
                        className="form-input w-full "
                        placeholder="Penalty"
                        defaultValue="0.00"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>

      <div className="flex   flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className=" sm:bg-white sm:shadow sm:rounded-lg sm:px-6 sm:py-6 w-full">
          <div className="bg-primary text-gray-900 pb-6 rounded-t-lg">
            Payment Option
          </div>
          <div className="">
            <table className="w-full border-collapse px-2 py-4 text-sm text-gray-900">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-2 py-4 text-sm text-gray-900">PayU</td>
                  <td className="px-2 py-4 text-sm text-gray-900 flex flex-col gap-2 pl-4">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optradio"
                          defaultChecked
                          className="form-radio "
                        />
                         <span className="ml-2">Internet Banking</span>
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optradio"
                          className="form-radio"
                        />
                        <span className="ml-2">Credit Card</span> 
                      </label>
                    </div>
                    <div className="radio ">
                      <label>
                        <input
                          type="radio"
                          name="optradio"
                          className="form-radio"
                        />
                        <span className="ml-2">Debit Card</span> 
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-4 text-sm text-gray-900">
                    eCollect Slip for NEFT / RTGS
                  </td>
                  <td className="px-2 py-4 text-sm text-gray-900 pl-4">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="optradio"
                          className="form-radio"
                        />
                        <span className="ml-2">e-Payment Request Slip</span> 
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 mb-4 self-center">
        <button   onClick={handleClick} className="flex justify-center items-center w-[200px] rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Pay
        </button>
      </div>
    </div>
  );
}

export default FileDetails;
