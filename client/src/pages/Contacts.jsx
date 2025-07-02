import React from 'react'
import {locationsData } from '../data'; 
import LocationCard from '../components/LocationCard';
const Contacts = () => {

  return (
    <section id='contacts' className=''>
  <div className='container flex flex-col justify-center items-center mx-auto max-w-6xl bg-black/15 rounded-r-lg backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8'>
    {/* Header */}
    <div className='flex flex-col justify-center items-center text-center'>
      <p className='font-medium text-amber-300'>Our locations</p>
      <h1 className='mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white'>
        Visit our offices
      </h1>
      <p className='mt-3 text-gray-500 dark:text-gray-400'>
        Find us at these locations.
      </p>
    </div>

    {/* Main Content */}
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-12'>
      {/* Contact Form */}
      <div>
        <form className='space-y-4'>
          <input
            type='text'
            placeholder='Name:'
            className='w-full text-white placeholder:text-sm placeholder:text-amber-300 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-amber-300'
          />
          <input
            type='email'
            placeholder='Email:'
            className='w-full text-white placeholder:text-sm placeholder:text-amber-300 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-amber-300'
          />
          <input
            type='text'
            placeholder='Subject:'
            className='w-full text-white placeholder:text-sm placeholder:text-amber-300 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-amber-300'
          />
          <textarea
            placeholder='Message:'
            rows='6'
            className='w-full text-white placeholder:text-sm placeholder:text-amber-300 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-amber-300'
          ></textarea>
          <button
            type='button'
            className='inline-flex items-center justify-center w-full h-12 rgb-button bg-gradient-to-r from-blue-500 to-amber-500 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate'
          >
            Send message
          </button>
        </form>
      </div>

      {/* Location Cards */}
      <div>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          {locationsData.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contacts
