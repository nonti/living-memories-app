// src/components/LocationCard.jsx
import React from 'react';

const LocationCard = ({ location }) => {
    return (
        <div>
            <h2 className='font-medium text-gray-800 dark:text-white'>
                {location.office}: {location.name}
            </h2>
            <p className='mt-2 text-gray-500 dark:text-gray-400'>
                {location.addressLine1} <br />
                {location.addressLine2}
            </p>
            {location.postal && (
                <p className='text-white'>{location.postal}</p>
            )}
            {location.email && (
                <p className='text-white'>{location.email}</p>
            )}
            <p className='text-white'>Call: {location.phone}</p>
        </div>
    );
};

export default LocationCard;