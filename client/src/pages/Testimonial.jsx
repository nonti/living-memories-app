import React from 'react'
import { testimonialsData } from '../data';
import Marquee from '../components/Marquee';

const Testimonial = () => {
   const firstRowTestimonials = testimonialsData.slice(0, Math.ceil(testimonialsData.length / 2));
    const secondRowTestimonials = testimonialsData.slice(Math.ceil(testimonialsData.length / 2));
  return (
    <section className='w-full min-h-screen flex items-center text-white dark:bg-gray-50 '>
            <div className='max-w-6xl  py-5 mt-10 mb-20 mx-auto overflow-hidden'>
                <div className='w-full flex items-center flex-col gap-1 justify-center mb-16 px-4'>
                    <p className='text-sm sm:text-lg font-semibold text-amber-300'>Words That Matter</p>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>See Why Clients Keep Coming Back</h3>
                </div>
                <div className='flex flex-col gap-3'>
                    {/* Top Row: Scrolls right to left */}
                    <Marquee direction='normal' testimonials={firstRowTestimonials} />

                    {/* Bottom Row: Scrolls left to right */}
                    <Marquee direction='scrollReverse' testimonials={secondRowTestimonials} />
                </div>
            </div>
        </section>
  )
}

export default Testimonial


