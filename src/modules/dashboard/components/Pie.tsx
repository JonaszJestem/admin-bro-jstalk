import React, { FC } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Shoes', 'Kids', 'Home', 'Outdoors', 'Clothing'],
  datasets: [
    {
      data: [300, 50, 100, 150, 250],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#98fd5f'],
      hoverBackgroundColor: ['#d04f68', '#277db8', '#deb44b', '#80e04b'],
    },
  ],
};

export const PieChart: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <h2>Most sold by category</h2>
      <Pie data={data} height={250} onElementsClick={onClick} />
    </div>
  );
};
