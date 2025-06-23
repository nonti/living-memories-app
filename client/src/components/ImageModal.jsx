import React from 'react'

const ImageModal = () => {
  return (
    <div className='fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
      <div class='relative p-4 w-full max-w-md max-h-full'>
        <div class='relative bg-white px-4 py-2 rounded-lg shadow-sm dark:bg-gray-700'>
          <div className='space-x-4'>
            <h2 className='text-xl font-semibold mb-4 text-white'>Update Profile Picture</h2>
            <form className='max-w-lg mx-auto flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <label className='block mb-2 px-3 text-sm font-medium text-gray-900 dark:text-white'>Upload file</label>
                <input className='block w-full py-2  px-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' aria-describedby='user_avatar_help' id='user_avatar' type='file'/>
              </div>
              <button className='inline-flex w-24 items-center justify-center  h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-400 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate '>Save</button> 
            </form>
            <div className='mt-1 text-sm text-gray-500 dark:text-gray-300' id='user_avatar_help'>A profile picture is useful to confirm your are logged into your account</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageModal;