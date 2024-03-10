import { useState } from "react";

export default function UserMaster() {
  const [role, setRole] = useState("user");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className=" ">
                <h2 className="block text-sm font-medium leading-6 text-gray-900 mb-4">Select Role:</h2>
            <div className="flex gap-4 items-center">
                  <label className="inline-flex items-center  ">
                    <input
                      type="radio"
                      value="user"
                      checked={role === "user"}
                      onChange={handleRoleChange}
                      className="form-radio h-4 w-4 text-indigo-600 outline-none focus:outline-none"
                    />
                    <span className="ml-2">User</span>
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="admin"
                      checked={role === "admin"}
                      onChange={handleRoleChange}
                      className="form-radio h-4 w-4 text-indigo-600 outline-none focus:outline-none"
                    />
                    <span className="ml-2">Admin</span>
                  </label>
                  </div>
              </div>

              <div className="flex gap-4">
                <button
                 onClick={()=> alert("Form Submitted")}
                  className="flex justify-center items-center w-[50%] rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
                <button
                  type="submit"
                  className="bg-white border w-[50%]  flex gap-2 justify-center items-center border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
