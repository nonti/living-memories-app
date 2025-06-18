import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import profile from '../assets/profile.png';
import { PiStandardDefinition } from "react-icons/pi";
import { MdOutlineCalendarMonth,MdNotificationsNone,MdMailOutline, MdOutlineWorkspacePremium, MdOutlineMiscellaneousServices, MdOutlineAvTimer, MdOutlineReviews } from "react-icons/md";
import Chart from '../components/Chart';

const Main = () => {
  return (
    <div className='flex flex-col md:flex-row bg-slate-950'>
      <section className='w-auto md:w-[70%] h-full'>
        <div className='w-full flex items-center justify-between'>
          <div className='text-amber-300 m-4 font-bold text-md md:text-2xl dark:text-transparent bg-clip-text dark:bg-gradient-to-tl from-indigo-900 to-amber-400'>
            Good day, Lok at you account
          </div>
          <div className='md:hidden flex gap-4 items-center justify-end px-4 text-amber-400'>
            <MdOutlineCalendarMonth/>
            <MdNotificationsNone/>
            <MdMailOutline/>
            <img src={profile} alt='Profile image' className='w-8 h-8 rounded-full'/>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
          <div className='flex flex-col justify-between w-full md:w-auto h-48 bg-slate-900/50 p-4 rounded-md'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-4xl text-slate-300 '>
                <MdOutlineWorkspacePremium/>
              </div>
              <div className='flex items-center justify-center w-10 h-10 text-slate-300  rounded-full '>
                <CiMenuKebab/>
              </div>
            </div>
            <div className='font-extrabold text-4xl sm:text-2xl lg:text-xl text-slate-300 '>
                10K
              </div>
              <div className='text-slate-300 text-sm'>
                Premium Subscription
              </div>
            </div>
            <div className='flex flex-col justify-between w-full md:w-auto h-48 bg-slate-900/50 p-4 rounded-md'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-4xl text-slate-300 '>
                <PiStandardDefinition/>
              </div>
              <div className='flex items-center justify-center w-10 h-10 text-slate-300  rounded-full '>
                <CiMenuKebab/>
              </div>
            </div>
            <div className='font-extrabold text-4xl sm:text-2xl lg:text-xl text-slate-300 '>
                15K
              </div>
              <div className='text-slate-300 text-sm'>
                Standard Subscriptions
              </div>
            </div>
            <div className='flex flex-col justify-between w-full md:w-auto h-48 bg-slate-900/50 p-4 rounded-md'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-4xl text-slate-300 '>
                <MdOutlineReviews/>
              </div>
              <div className='flex items-center justify-center w-10 h-10 text-slate-300  rounded-full '>
                <CiMenuKebab/>
              </div>
            </div>
            <div className='font-extrabold text-4xl sm:text-2xl lg:text-xl text-slate-300 '>
                500K
              </div>
              <div className='text-slate-300 text-sm'>
                Reviews
              </div>
            </div>
            <div className='flex flex-col justify-between w-full md:w-auto h-48 bg-slate-900/50 p-4 rounded-md'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-4xl text-slate-300 '>
                <MdOutlineMiscellaneousServices/>
              </div>
              <div className='flex items-center justify-center w-10 h-10 text-slate-300  rounded-full '>
                <CiMenuKebab/>
              </div>
            </div>
            <div className='font-extrabold text-4xl sm:text-2xl lg:text-xl text-slate-300 '>
                50 per location
              </div>
              <div className='text-slate-300 text-sm'>
                Weekly services
              </div>
            </div>
        </div>
        <div className='grid md:grid-cols-4  gap-4 m-4 w-auto'>
          <div className='col-span-4 md:col-span-1  h-28 bg-white dark:bg-slate-900/50 rounded-md'>
            <div className='flex flex-col  justify-between p-4 h-full'>
              <div className='font-semibold text-indigo-950 dark:text-slate-400'>New Clients</div>
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl sm:text-xl md:text-xl lg:text-5xl font-bold text-indigo-950 dark:text-slate-400'>64</div>
                <div className='flex px-2 py-1 text-xs rounded-full bg-green-500 items-center justify-center text-green-900'>+69%</div>
              </div>
            </div>
          </div>
         <div className='col-span-4 md:col-span-3 row-span-2 bg-white dark:bg-slate-900/50'>
            <Chart/>
          </div>
          <div className='col-span-4 md:col-span-1  h-28 bg-white dark:bg-slate-900 rounded-md'>
            <div className='flex flex-col  justify-between p-4 h-full'>
              <div className='font-semibold text-indigo-950 dark:text-slate-400'>Invoice Overdue</div>
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl font-bold text-indigo-950 dark:text-slate-400'>9</div>
                <div className='flex px-2 py-1 text-xs rounded-full bg-red-500 items-center justify-center text-red-900 dark:text-slate-400'>19%</div>
              </div>
            </div>
          </div>
        </div>
        <div className='m-4'>
          <div className='text-amber-500 font-bold text-xl'>Recent Transactions</div>
          <table className='w-full text-sm text-left '>
            <thead className='text-xs text-slate-400 uppercase bg-slate-900/50'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  Person
                </th>
                 <th scope='col' className='py-3 px-6'>
                  Bank Account
                </th>
                 <th scope='col' className='py-3 px-6'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className='text-slate-400'>
              <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>
                  John Doe
                </td>
                <td className='py-4 px-6'>
                  985423657
                </td>
                <td className='py-4 px-6'>
                  R450000.00
                </td>
              </tr>
               <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>
                  John Doe
                </td>
                <td className='py-4 px-6'>
                  985423657
                </td>
                <td className='py-4 px-6'>
                  R450000.00
                </td>
              </tr>
               <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>
                  John Doe
                </td>
                <td className='py-4 px-6'>
                  985423657
                </td>
                <td className='py-4 px-6'>
                  R450000.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className='w-full md:w-[30%] bg-indigo-950/20'>
      <div className='flex flex-col m-4'>
         <div className='hidden md:flex gap-4 items-center justify-end px-4 text-amber-400'>
            <MdOutlineCalendarMonth/>
            <MdNotificationsNone/>
            <MdMailOutline/>
            <img src={profile} alt='Profile image' className='w-8 h-8 rounded-full'/>
          </div>
          <div className="flex flex-col bg-slate-900/50 gap-6 p-4 m-4 rounde-md h-auto shadow-lg">
            <div>
              <div className='font-bold text-amber-400'>Formation</div>
              <div className='text-xs font-bold text-amber-500'>In progress</div>
            </div>
            <div className='h-4 w-full bg-gray-200 rounded-lg'>
              <div className='h-4 bg-indigo-900 rounded-lg w-[30%]'></div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='font-bold text-slate-400'>
                Estimated Processing
              </div>
              <div className='font-semibold text-slate-400'>5-5 business days</div>
            </div>
            <div className=''>
              <button className="bg-gradient-to-tr from-inidigo-600 to-amber-500 text-slate-400 rounded-xl p-4 w-full">View status</button>
            </div>
          </div>
            <div className='flex flex-col gap-5 m-4 text-indigo-900 dark:text-slate-400  '>
            <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950'>
              <MdOutlineAvTimer/>
              </div>
              <div className=''>
                <div className='font-semibold text-sm'>Run payroll</div>
                <div className='text-indigo-500 text-xs'>March 7th at 4:50Pm</div>
              </div>
            </div>
            <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950'>
              <MdOutlineAvTimer/>
              </div>
              <div>
                <div className='font-semibold text-sm'>Run payroll</div>
                <div className='text-indigo-500 text-xs'>March 7th at 4:50Pm</div>
              </div>
            </div>
            <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950'>
              <MdOutlineAvTimer/>
              </div>
              <div>
                <div className='font-semibold  text-sm'>Run payroll</div>
                <div className='text-indigo-500 text-xs'>March 7th at 4:50Pm</div>
              </div>
            </div>
            <div className='flex gap-4 items-center bg-white dark:bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-300 dark:bg-slate-950'>
              <MdOutlineAvTimer/>
              </div>
              <div>
                <div className='font-semibold  text-sm'>Run payroll</div>
                <div className='text-indigo-500 text-xs'>March 7th at 4:50Pm</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col bg-white dark:bg-slate-900/50 gap-6 p-4 m-4 rounded-lg h-auto  shadow-lg'>
            <div>
              <div className='font-bold text-indigo-950 dark:text-slate-400'>Board Meeting</div>
              <div className='text-xs font-bold text-indigo-500'>March 5th 2024</div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='font-semibold text-indigo-900 dark:text-slate-400 text-sm'>
                You have been invited to attend a meeting of board of directors
                </div>
            </div>
            
          </div>
        </div>
       
      </section>
    </div>
  )
}

export default Main