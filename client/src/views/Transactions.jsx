import React from 'react'

const Transactions = () => {
  return (
   <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                   <th scope="col" className="px-6 py-3">Fullname</th>
                   <th scope="col" className="px-6 py-3">Policy Number</th>
                   <th scope="col" className="px-6 py-3">ID Number</th>
                   <th scope="col" className="px-6 py-3">Date</th>
                   <th scope="col" className="px-6 py-3">Status</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                   <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">John</th>
                   <td className="px-6 py-4">John Doe</td>
                   <td className="px-6 py-4">875421</td>
                   <td className="px-6 py-4">2025/01/08</td>
                   <td className="px-6 py-4">paid</td>                   
                 </tr>
                 {/* Add other rows here */}
               </tbody>
             </table>
           </div>
  )
}

export default Transactions