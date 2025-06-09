import React from 'react'

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-amber-400 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]'>
            <p className='px-5 py-5 tracking-tight text-lg font-extralight md:text-lg'>
                '{testimonial.quote}'
            </p>
            <div className='flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10'>
                <div className='flex items-center w-3/4 gap-3 px-4 py-3'>
                    <img className='w-10 h-10 rounded' src={testimonial.avatar} alt={testimonial.name} />
                    <div className='flex flex-col items-start justify-start flex-1 gap-0'>
                        <h5 className='text-base font-medium md:text-md'>{testimonial.name}</h5>
                        <p className='text-sm md:text-base mt-[-4px] text-white/50 dark:text-black/30'>
                            {testimonial.title}
                        </p>
                    </div>
                </div>
                <div className='w-[1px] bg-white/10 dark:bg-black/20'></div>
                <div className='flex items-center justify-center max-w-full mx-auto'>
                    <a target='_blank' href={testimonial.socialLink} rel='noopener noreferrer'>
                       
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;

