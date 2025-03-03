import Navbar from '@/components/Navbar/page'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
            <p className="text-gray-600">This is your main dashboard. Navigate to Scan to check attendance.</p>
        </div>
    </div>
  )
}

export default Dashboard