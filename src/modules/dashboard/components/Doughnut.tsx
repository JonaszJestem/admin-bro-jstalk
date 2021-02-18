import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = () => ({
  labels: ['< 20 years', '20 - 40 years', '> 40 years'],
  datasets: [
    {
      data: [
        getRandomInt(50, 200),
        getRandomInt(100, 150),
        getRandomInt(150, 250),
      ],
      backgroundColor: ['#CCC', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
});
const BarChart: FC = () => {
  return (
    <div>
      <h2>Customer age</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default BarChart;
