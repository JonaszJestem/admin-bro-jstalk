import DoughnutChart from './components/Doughnut';
import React from 'react';
import BarChart from './components/Bar';
import HorizontalBarChart from './components/HorizontalBar';
import { PieChart } from './components/Pie';
import { RadarChart } from './components/Radar';
import { LineChart } from './components/Line';

export default { title: 'Charts' };

export const Doughnut = () => (
  <div style={{ height: 400, width: 400 }}>
    <DoughnutChart />
  </div>
);

export const HorizontalBar = () => (
  <div style={{ height: 400, width: 400 }}>
    <HorizontalBarChart />
  </div>
);

export const Bar = () => (
  <div style={{ height: 400, width: 400 }}>
    <BarChart />
  </div>
);

export const Pie = () => (
  <div style={{ height: 400, width: 400 }}>
    <PieChart />
  </div>
);

export const Radar = () => (
  <div style={{ height: 400, width: 400 }}>
    <RadarChart />
  </div>
);

export const Line = () => (
  <div style={{ height: 400, width: 400 }}>
    <LineChart />
  </div>
);
