import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  }

  return (
    <section className=''>
      <div className='min-h-screen  py-6 flex flex-col justify-center sm:py-12'>
  <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
    <div
      className='absolute inset-0 bg-gradient-to-r from-amber-400 to-indigo-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'>
    </div>
    <div className='relative px-4 py-10 bg-black/15 rounded-r-lg backdrop-blur-sm border border-white shadow-lg sm:rounded-3xl sm:p-20'>

      <div className='max-w-md mx-auto'>
        <div className='flex items-center justify-center gap-2'>
          <Link to='/'><img src={logo} alt='Logo' className='w-8 h-8'/></Link>
          <h1 className='text-2xl text-white text-center font-semibold'>Login</h1>
        </div>
        <div className='divide-y divide-gray-200'>
          <form onSubmit={handleSubmit}>
          <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
            <div className='relative'>
              <input autocomplete='off' id='email' name='email' type='text' className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' placeholder='Email' />
            </div>
            <div className='relative'>
              <input autocomplete='off' id='password' name='password' type='password' className=' text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-6000' placeholder='Password' />
             
            </div>
            <div className='relative'>
              <button className='inline-flex items-center justify-center w-full h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-400 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate '
                >Sign in </button>
            </div>
          </div>
          </form>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <button className='flex items-center bg-white border gap-3 border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
          <FcGoogle className='text-2xl'/>
          <span>Continue with Google</span>
        </button>
      </div>

    </div>
  </div>
</div>
    </section>
  )
}

export default Login