import React, { FC } from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['John', 'Amy', 'Derek', 'Tony', 'Maya', 'Julia', 'Tom'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const HorizontalBarChart: FC = () => {
  return (
    <div>
      <h2>Sold items per seller</h2>
      <HorizontalBar
        data={data}
        width={100}
        height={150}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default HorizontalBarChart;
