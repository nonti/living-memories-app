import React from 'react'
import {locationsData } from '../data'; // Import your data
import LocationCard from '../components/LocationCard';
const Contacts = () => {

  return (
     <section className=''>
      <div className='mx-auto  pt-36 sm:pt-34 md:top-10'>
      <div className='container flex flex-col justify-center items-center max-w-6xl bg-black/15 rounded-r-lg backdrop-blur-sm py-4 px-8 mx-auto'> 
        {/* Centered header content */}
        <div className='flex flex-col justify-center items-center text-center'> 
          <p className='font-medium text-amber-300'>Our locations</p>
          <h1 className='mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white'>Visit our offices</h1>
          <p className='mt-3 text-gray-500 dark:text-gray-400'>Find us at these locations.</p>
        </div>

        {/* Grid for location cards */}
        <div className='grid grid-cols-1 gap-10 mt-8 max-w-6xl md:grid-cols-2 lg:grid-cols-3'> 
          {locationsData.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contacts
