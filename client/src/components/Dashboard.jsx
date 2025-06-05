import React from 'react'
import Sidebar from '../views/Sidebar'
import MemberForm from '../views/MemberForm'
import HeaderNav from '../views/HeaderNav'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
        <HeaderNav/>
      </div>
      <div>
        <MemberForm/>
      </div>
    </div>
  )
}

export default Dashboard