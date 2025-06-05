import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const MemberForm = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  return (
    <div>
      <h1 className='text-2xl text-center mb-4'>Members</h1>

      <button
        onClick={() => setShowForm(true)}
        className='inline-flex items-center justify-center w-46 h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-400 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate'
      >
        New Member
      </button>

      {/* TABLE (Hidden when showForm is true) */}
      {!showForm && (
        <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Fullname</th>
                <th scope="col" className="px-6 py-3">Surname</th>
                <th scope="col" className="px-6 py-3">ID Number</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">John</th>
                <td className="px-6 py-4">Doe</td>
                <td className="px-6 py-4">78001102015301</td>
                <td className="px-6 py-4">Alive</td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              {/* Add other rows here */}
            </tbody>
          </table>
        </div>
      )}

      {/* FORM (Visible when showForm is true) */}
      {showForm && (
        <form className="max-w-sm mx-auto flex flex-col gap-4 mt-8">
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FaRegCircleUser />
            </span>
            <input
              type="text"
              placeholder="Fullname"
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 w-full text-sm p-2.5"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FaRegCircleUser />
            </span>
            <input
              type="text"
              placeholder="Surname"
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 w-full text-sm p-2.5"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FaRegCircleUser />
            </span>
            <input
              type="text"
              placeholder="ID Number"
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 w-full text-sm p-2.5"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-400 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default MemberForm;
