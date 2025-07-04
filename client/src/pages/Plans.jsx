import React, { useState } from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { premiumPlans, standardPlans } from '../data';
import { MdOutlineToggleOff, MdOutlineToggleOn } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Plans = () => {
   const [showPremium, setShowPremium] = useState(true);
   const currentPlans = showPremium ? premiumPlans : standardPlans;
   const navigate = useNavigate();
  return (
    <>
     <div id='plans' className='relative w-full h-full'>
      <div className='absolute hidden w-full bg-white lg:block h-96' />
      <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight xl:text-gray-900 text-white sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
             
              <span className='relative'>Affordable</span>
            </span>{' '}
            for everyone
          </h2>
          <p className='text-base xl:text-gray-900 text-white md:text-lg'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>

          <div className='flex justify-center mb-8 items-center space-x-4'> 
        {/* Toggle for Premium */}
        <span
          className={`text-lg font-medium transition-colors duration-200 ${
            !showPremium ? 'text-amber-500' : 'text-gray-500'
          }`}>Standard</span> 
        <button
          onClick={() => setShowPremium(!showPremium)} 
          className='p-2  transition-colors duration-200'
          aria-label={showPremium ? 'Switch to Standard plans' : 'Switch to Premium plans'}
        >
          {showPremium ? (
            <MdOutlineToggleOff className='text-gray-500 text-5xl' /> 
          ) : (
            <MdOutlineToggleOn className='text-amber-500 text-5xl' /> 
          )}
        </button>
        <span
          className={`text-lg font-medium transition-colors duration-200 ${
            !showPremium ?  'text-gray-500' : 'text-amber-500' 
          }`}>Premium</span> 
      </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto'>
        {currentPlans.map((plan) => (
          <div key={plan.id}>
            <div className='p-8 bg-black/15 backdrop-blur-lg border-amber-300 border rounded-2xl'>
              <div className='mb-4 text-center'>
                <p className='text-xl font-medium tracking-wide text-white mb-3'>
                  {plan.title}
                </p>
                <div className='flex items-center justify-center'>
                  <p className='mr-2 text-2xl font-semibold text-white lg:text-3xl'>
                    {plan.price}
                  </p>
                  <p className='text-lg text-gray-500'>{plan.frequency}</p>
                </div>
              </div>
              <ul className='mb-8 space-y-2'>
                {plan.features.map((feature, index) => (
                  <li key={index} className='flex items-center'>
                    <div className='mr-3'>
                      <IoCheckmarkCircleOutline className='text-amber-300'/>
                    </div>
                    <p className='font-medium text-gray-300'>{feature}</p>
                  </li>
                ))}
              </ul>
              <div className='flex justify-center'>
                <button
                  onClick={() => navigate('/login')}
                  type='submit'
                  className='inline-flex items-center justify-center w-full h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-500 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate'
                >
                  Join Plan
                </button>
              </div>
            </div>
            <div className='w-11/12 h-2 mx-auto bg-amber-300 rounded-b opacity-75' />
            <div className='w-10/12 h-2 mx-auto bg-amber-300 rounded-b opacity-50' />
            <div className='w-9/12 h-2 mx-auto bg-amber-300 rounded-b opacity-25' />
          </div>
        ))}
      </div>
      </div>
    </div>
 
                                            
    </>
  )
}

export default Plans