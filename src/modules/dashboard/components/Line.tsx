import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const getCurrentTime = () => {
  const date = new Date();

  return [date.getHours(), date.getMinutes()];
};

const initialState = {
  labels: new Array(7).fill(null).map((_, index) => {
    const [currentHour, currentMinutes] = getCurrentTime();
    return `${currentHour}:${currentMinutes - 7 + index}`;
  }),
  datasets: [
    {
      label: 'Visitors',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const Graph = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(function () {
      const oldDataSet = state.datasets[0];
      const newData = [] as any[];

      for (let x = 0; x < state.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100));
      }

      const newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      const newState = {
        ...initialState,
        datasets: [newDataSet],
      };

      setState(newState);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return <Line data={state} />;
};

export const LineChart = () => (
  <div>
    <h2>Page visitors</h2>
    <Graph />
  </div>
);
