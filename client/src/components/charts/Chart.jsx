import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'
const Chart = () => {
  return (
    <>
    <div>
      <Bar className='m-2 lg:p-3 '
        data={{
          labels:['Platinum', 'Gold', 'Silver'],
          datasets:[
            {
              label:'Premium Analytics',
              data:[5000, 2000,1600],
              backgroundColor:['rgb(128, 128, 128)', 'rgb(255, 215, 0)', 'rgb(192, 192, 192)']
            },
          ]
        }}
      />
      
    </div>
  </>

  )
}

export default Chart