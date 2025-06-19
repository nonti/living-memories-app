// src/components/LocationCard.jsx
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';

const LocationCard = ({ location }) => {
    return (
        <div>
            <div className='relative flex flex-col my-6 bg-transparent shadow-lg border shadow-amber-300/75 border-slate-200 rounded-lg w-64'>
  <div className='mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1'>
    <span className='text-sm text-white font-medium'>
      {location.office}: {location.name}
    </span>
  </div>
  
  <div className='p-2'>
    <h5 className='mb-2 px-2 text-white text-sm font-semibold'>
      {location.addressLine1}<br/>
      {location.addressLine2}
    </h5>
    <p className='text-white leading-normal font-light px-2 flex gap-2'>
        <IoCallOutline className='text-amber-300 text-xl' />
      {location.phone}
    </p>
  </div>
</div>
        </div>
    );
};

export default LocationCard;
