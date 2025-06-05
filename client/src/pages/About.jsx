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
		 <section>
      <div className="pt-10">
        <div className="gap-16 items-center bg-black/15 rounded-r-lg backdrop-blur-sm  px-8 mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-4">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl pt-0 tracking-tight font-extrabold text-amber-300 text-center">About Us</h2>
            <p className="mb-4 px-4">
              {isExpanded ? aboutText : shortText}
            </p>
            <button
              onClick={toggleReadMore}
              className="text-amber-400 hover:underline px-4"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg hover:rotate-12"
              src={office}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg hover:translate-1/2 ease-in-out"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </div>
    </section>
		
  )
}

export default About;