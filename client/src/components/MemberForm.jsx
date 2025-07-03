import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const MemberForm = () => {  
  const [formData, setFormData] = useState(
    {
      planName:'',
      title: '',
      surname:'',
      firstName:'',
      gender:'',
      idNumber:'',
      dateOfBirth:'',
      address: '',
      areaCode:'',
      phone: '',
      workPhone:'',
      email:'',
    }
  );

  const handleOnChange = (e) => {
    setFormData(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData()
  }
  return (
    <section>
       <div className='min-h-screen py-6 flex flex-col justify-center sm:py-12'>
  <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
    <div
      className='absolute inset-0 bg-gradient-to-r from-amber-400 to-indigo-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'>
    </div>
    <div className='relative py-10 bg-black/15 rounded-r-lg backdrop-blur-sm border border-white shadow-lg sm:rounded-3xl sm:p-20'>

      <div className='max-w-md mx-auto'>
        <div className='flex items-center justify-center gap-2'>
          <Link to='/'><img src={logo} alt='Logo' className='w-8 h-8'/></Link>
          <h1 className='text-2xl text-white text-center font-semibold'>Register</h1>
        </div>
        <div className='divide-y divide-gray-200'>
          <form onSubmit={handleSubmit}>
          <div className='py-8 text-base leading-6 space-y-4  text-gray-700 sm:text-lg sm:leading-7'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
             <div>
               <div className='relative'>
              <input type="text" name="planName" value={formData.planName} disabled id="planName" placeholder={`Plan Name: ${formData.planName}`} className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
            </div>
            <div className='relative'>
              <input type="text" name="title" value={formData.title} onChange={handleOnChange} id="title" placeholder="Title" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
            </div>
            <div className='relative'>                      
              <input type="text" name="surname" value={formData.surname} onChange={handleOnChange} id="surname" placeholder="Surname" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
            </div>
            <div className='relative'>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleOnChange} id="firstName" placeholder='Firstname(s)' className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600'  required=""/>
            </div>
            <div className='relative'>
              <input type="text" name="gender" value={formData.gender} onChange={handleOnChange} id="gender" placeholder="Gender" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
            </div>
            <div className='relative'>
              <input type="number" name="idNumber" value={formData.idNumber} onChange={handleOnChange} id="idNumber" placeholder="Id Number" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
            </div>
             </div>
            
            <div>
              <div className='relative'>
              <input type="date" name="dateOfBirth"  value={formData.dateOfBirth} onChange={handleOnChange} id="dateOfBirth" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600'  required=""/>
            </div>
            <div className='relative'>
              <textarea type="text" rows={8} name="address" value={formData.address} onChange={handleOnChange} id="address" placeholder="Physical/Postal Address" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
            </div>
            <div className='relative'>                      
              <input type="number" name="areaCode" value={formData.areaCode} onChange={handleOnChange} id="areaCode" placeholder="ZipCode" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
            </div>
            <div className='relative'>
              <input type="text" name="phone" value={formData.phone} onChange={handleOnChange} id="phone" placeholder='Cell Phone' className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600'  required=""/>
            </div>
            <div className='relative'>
              <input type="text" name="workPhone" value={formData.workPhone} onChange={handleOnChange} id="workPhone" placeholder="Work Phone" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
            </div>
            <div className='relative'>
                      <input type="email" name="email" value={formData.email} onChange={handleOnChange} id="email" placeholder="Email" className='text-lg peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-lg h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:borer-rose-600' required=""/>
          </div>
            </div>
            </div>
            
           
      <div className='relative'>
              <button type='submit' 
              className='inline-flex items-center justify-center w-full h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-400 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate '
                >Register </button>
            </div>
          </div>
          </form>
        </div>
      </div>

         </div>
  </div>
</div>
      
    </section>
  )
}

export default MemberForm