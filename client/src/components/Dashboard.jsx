import React from 'react'
import Sidebar from '../views/Sidebar'
import MemberForm from '../views/MemberForm'
import HeaderNav from '../views/HeaderNav'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='grow ml-16 md:ml-64'>
        <HeaderNav/>
        <div className='px-8'>
         <MemberForm/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard