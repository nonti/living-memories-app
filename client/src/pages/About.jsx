import { useState } from 'react';
import office from '../assets/office.png';
import { aboutText } from '../data';
const About = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded);
	}

	const shortText = aboutText.substring(0, 180) + '...';
  return (
		 <section id='about'>
      <div className='pt-10'>
        <div className='gap-16 items-center bg-black/15 rounded-r-lg backdrop-blur-sm  px-8 mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-4'>
          <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
            <h2 className='mb-4 text-4xl pt-0 tracking-tight font-extrabold text-amber-300 text-center'>About Us</h2>
            <p className='mb-4 px-4'>
              {isExpanded ? aboutText : shortText}
            </p>
            <button
              onClick={toggleReadMore}
              className='text-amber-400 hover:underline px-4'
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
            <img
              className='w-full rounded-lg hover:rotate-12'
              src={office}
              alt='office content 1'
            />
            <img
              className='mt-4 w-full lg:mt-10 rounded-lg hover:rotate-12'
              src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/498586625_1902359533901705_1494575735667969237_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=s4-44GZgCt8Q7kNvwFegLH2&_nc_oc=AdkwrYNkNxHEGSlLFGR-ja8D_b4lHFKl6LcppIdspjMFHM69Zd8HCE9ZpgcPal5S61E&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=1u5cpXuPKjReVpRgV9wvLw&oh=00_AfPXy53rhqVM-HxPIfN6qUthkBzurEfCy9aEXR3_65lj7Q&oe=684C8C5D'
              alt='office content 2'
            />
          </div>
        </div>
      </div>
    </section>
		
  )
}

export default About;