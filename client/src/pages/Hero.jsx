import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='h-screen'>
    <div className="mx-auto max-w-6xl pt-36 sm:pt-34 md:top-10">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8 bg-black/15 rounded-r-lg backdrop-blur-sm py-4 px-2">
            <div className="px-8 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div className="space-y-8 ">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-5xl font-bold tracking-normal text-white sm:text-5xl md:text-6xl">
                                <span className="sm:text-5xl">Memories that{" "}
                                </span> 
                                <span
                                    className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-600">Last Forever
                                </span>
                                <br/>
                            </h1>
                        </div>

                        <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa perferendis placeat architecto cumque omnis doloribus cupiditate magni ipsa, nam, dicta officiis quos mollitia tenetur accusantium fuga nihil iure ullam atque..
                        </p>

                    </div>

                    <div className="border-t border-gray-700"></div>

                    <div className="flex space-x-4 items-center text-white">
                        <div className="flex items-center space-x-2">
                            <div className="flex flex-shrink-0 -space-x-1">
                                <img loading="lazy"  decoding="async"
                                    className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                     src="https://randomuser.me/api/portraits/men/29.jpg"/>
                                <img loading="lazy"  decoding="async"
                                    className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                     src="https://randomuser.me/api/portraits/men/90.jpg"/>
                                <img loading="lazy"  decoding="async"
                                    className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                     src="https://randomuser.me/api/portraits/men/75.jpg"/>
                                <img loading="lazy"  decoding="async"
                                    className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                     src="https://randomuser.me/api/portraits/men/5.jpg"/>
                            </div>

                            <span className="flex-shrink-0 text-xs font-medium leading-5">+15</span>

                        </div>

                        <div className="h-4 border-l border-gray-700"></div>

                        <div className="flex items-center">

                            
                        </div>
                        <div className="h-4 border-l border-gray-700"></div>
                    </div>
                </div>
            </div>

            <div className="flex items-center w-full col-span-6">
                <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                    <div >
                        <div >
                            <iframe width="450" height="400" src="https://www.youtube.com/embed/f1m8x00CXT4" 
                            title="THOSI FAMILY CONVOY TO THEIR RESTING PLACE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Hero