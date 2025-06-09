import TestimonialCard from './TestimonialCard';

const Marquee = ({ direction = 'normal', testimonials }) => {
    const animationClass = direction === 'normal' ? 'animate-scroll' : 'animate-scrollReverse';

    // Duplicate testimonials to create a seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className='relative flex justify-around gap-5 overflow-hidden shrink-0'>
            <div className='max-w-full mx-auto'>
                <div className='px-4 md:px-10 mx-auto w-full'>
                    <div
                         className={`${animationClass} flex flex-nowrap w-max min-w-full animate-paused-on-hover overflow-hidden relative gap-5 justify-around shrink-0`}
                    >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marquee;

