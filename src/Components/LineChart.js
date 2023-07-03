import { Chart as ChartJS } from "chart.js/auto";
import React, { useRef, useEffect } from 'react';
import { Line,  } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

const LineChart = ({chartData}) => {
  const chartRef = useRef(null);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
            speed: 0.1,
          },
          pinch: {
            enabled: true,
            speed: 0.1,
          },
          mode: 'xy',
        },
      },
    },
  };

  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
