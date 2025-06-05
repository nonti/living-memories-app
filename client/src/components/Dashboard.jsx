import React from 'react'
import Sidebar from '../views/Sidebar'
import MemberForm from '../views/Members'
import HeaderNav from '../views/HeaderNav'
import Transaction from '../views/Transactions'
import AppLayout from '../views/AppLayout'

const Dashboard = () => {
  return (
    <div className='flex'>
      <AppLayout/>
      <Sidebar/>
      <div className='grow ml-16 md:ml-64'>
        <HeaderNav/>
        <div className='px-8'>
         <MemberForm/>
         <Transaction/>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard