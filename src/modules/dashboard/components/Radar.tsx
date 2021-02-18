import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
  labels: [
    'Fast delivery',
    'Competitive prices',
    'Discounts',
    'Custom sizes',
    'Communication with seller',
    'Long guaranty',
    'Other',
  ],
  datasets: [
    {
      label: 'Men',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: 'Women',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
};

export const RadarChart = () => (
  <div>
    <h2>Customer satisfaction</h2>
    <Radar data={data} height={250} />
  </div>
);
