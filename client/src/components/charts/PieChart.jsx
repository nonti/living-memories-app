import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
 
const PieChart = () => {
  const data = {
  labels: ['Plan A', 'Plan B', 'Plan C', 'Plan D', 'Plan E'],
  datasets: [
    {
      label: '# of Standard Analytics',
      data: [120, 190, 130, 155, 280],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
   <div className='bg-slate-900/55 flex items-center justify-center m-4 lg:p-12 '>
  <Pie data={data}/>
</div>
  )
}

export default PieChart