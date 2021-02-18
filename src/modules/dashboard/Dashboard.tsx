import { Box, H2 } from '@admin-bro/design-system';
import React, { FC, useEffect, useState } from 'react';
import BarChart from './components/Bar';
import Doughnut from './components/Doughnut';
import HorizontalBar from './components/HorizontalBar';
import { PieChart } from './components/Pie';
import { RadarChart } from './components/Radar';
import { LineChart } from './components/Line';
import { ViewHelpers } from 'admin-bro';

const Dashboard: FC = () => {
  const [income, setIncome] = useState(Math.random() * 1000 + 1000);

  useEffect(() => {
    const interval = setInterval(function () {
      setIncome(prevState => prevState + Math.random() * 100);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box>
      <Box m={24}>
        <H2>{`Total income: ${Math.round(income)}$`}</H2>
      </Box>
      <Box display="flex" flexWrap="wrap">
        {charts.map(({ Component, width, props = {} }, index) => (
          <Box bg="white" width={width} p="lg" m="md" key={index}>
            <Component {...props} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const charts = [
  { Component: BarChart, width: 3.1 / 10 },
  { Component: Doughnut, width: 3.1 / 10 },
  { Component: HorizontalBar, width: 3.1 / 10 },
  {
    Component: PieChart,
    width: 3.1 / 10,
    props: {
      onClick: e => {
        const category = e[0]._model.label;
        const listUrl = new ViewHelpers().resourceUrl({
          resourceId: 'Customer',
          search: `?filters.interestedIn=${category}`,
        });
        window.location.href = listUrl;
      },
    },
  },
  { Component: RadarChart, width: 3.1 / 10 },
  { Component: LineChart, width: 3.1 / 10 },
];

export default Dashboard;
