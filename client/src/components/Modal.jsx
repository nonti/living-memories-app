import React from 'react'
import { IoCloseSharp } from 'react-icons/io5';

const Modal = ({ onClose }) => {
  return (<>
     {/* <!-- Account Information Modal --> */}
  <div className='fixed left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0'>
    <div className='max-h-auto relative max-h-full w-full max-w-lg p-4'>
      {/* <!-- Modal content --> */}
      <div className='relative rounded-lg bg-white shadow dark:bg-gray-800'>
        {/* <!-- Modal header --> */}
        <div className='flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Account Information</h3>
          <button onClick={onClose}type='button' className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white' data-modal-toggle='accountInformationModal2'>
            <IoCloseSharp/>
            <span className='sr-only'>Close modal</span>
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <form className='p-4 md:p-5'>
          <div className='mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            

            <div className='col-span-2 sm:col-span-1'>
              <input type='text' id='full_name_info_modal' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500' placeholder='Enter your full names' required />
            </div>

            <div className='col-span-2 sm:col-span-1'>
              <input type='text' id='email_info_modal' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500' placeholder='Enter your surname' required />
            </div>

            <div className='col-span-2'>
              <label for='phone-input_billing_modal' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'> Phone Number* </label>
              <div className='flex items-center'>
                <button id='dropdown_phone_input__button_billing_modal' data-dropdown-toggle='dropdown_phone_input_billing_modal' className='z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700' type='button'>
                 
                  +27
                  
                </button>
                
                <div className='relative w-full'>
                  <input type='text' id='phone-input' className='z-20 block w-full rounded-eLg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='123-456-7890' required />
                </div>
              </div>
            </div>

            <div className='col-span-2'>
              <input type='text' id='pick-up-point-input' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500' placeholder='Address Line 1 ' required />
            </div>
              <div className='col-span-2 sm:col-span-1'>
              <div className='mb-2 flex items-center gap-2'>
                <label for='select_city_input_billing_modal' className='block text-sm font-medium text-gray-900 dark:text-white'> City* </label>
              </div>
              <select id='select_city_input_billing_modal' placeholder='City' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'>
                <option selected ></option>
                <option value='NY'>New York</option>
                <option value='LA'>Los Angeles</option>
                <option value='CH'>Chicago</option>
                <option value='HU'>Houston</option>
              </select>
            </div>
              <div className='col-span-2 sm:col-span-1'>
              <div className='mb-2 flex items-center gap-2'>
                <label for='select_city_input_billing_modal' className='block text-sm font-medium text-gray-900 dark:text-white'>Province</label>
              </div>
              <select id='select_city_input_billing_modal' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'>
                <option selected>Select</option>
                <option value='EC'>Eastern Cape</option>
                <option value='FS'>Free State</option>
                <option value='GP'>Gauteng</option>
                <option value='ZN'>Kwa-Zulu Natal</option>
                <option value='LP'>Limpopo</option>
                <option value='MP'>Mpumalanga</option>
                <option value='NC'>Northen Cape</option>
                <option value='Nw'>Nort West</option>
                <option value='WC'>Western Cape</option>
              </select>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <input type='text' id='email_info_modal' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500' placeholder='City' required />
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <input type='text' id='email_info_modal' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500' placeholder='Zip Code' required />
            </div>

          </div>
          <div className='border-t gap-2 flex border-gray-200 pt-4 dark:border-gray-700 md:pt-5'>
            <button type='submit' className='inline-flex items-center justify-center  h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-400 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate '>Save information</button>
            <button type='reset' onClick={onClose} className='inline-flex items-center justify-center  h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-400 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate '>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>

 
    </>
  )
}

export default Modal