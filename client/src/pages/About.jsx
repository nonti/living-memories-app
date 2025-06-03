import office from '../assets/office.png'

const About = () => {
  return (
    <section className=''>
      <h2 className='mb-4 text-4xl pt-0 tracking-tight font-extrabold text-amber-300 text-center'>About Us</h2>
        <div className='gap-16 items-center bg-black/15 rounded-r-lg backdrop-blur-sm  px-2  mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-4'>
          <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>          
            <p className='mb-4 px-4'>LMFS Offers you a range of products that are meant to assist you or your family in an event of death. We aspire to ensure funeral services be conducted in a dignified manner,  that brings peace and comfort to the bereaved families Funeral costs escalate almost every day. It is imperative that we always prepare ourselves in case of this eventuality. LMFS wants to make it possible for you to or your loved ones to pass through this passage of grief without incurring financial loss. Waiting period shall be 3 months if the main member is not coming from another society and no waiting period if from another society. All financial policies have 6 months waiting period for all accidental deaths.</p>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-8 mb-4'>
            <img className='w-full rounded-lg hover:rotate-12 ' src={office} alt='office content 1'/>
            <img className='mt-4 w-full lg:mt-10 rounded-lg hover:transition duration-700 ease-in-out' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png' alt='office content 2'/>
          </div>
        </div>
    </section>                                            
  )
}

export default About