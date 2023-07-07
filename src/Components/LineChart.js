import { Chart as ChartJS } from "chart.js/auto";
import React, { useRef, useEffect } from 'react';
import { Line,  } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

  const LineChart = ({chartData}) => {
  const chartRef = useRef(null);
  const handleResetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  };
  const handleZoomIn = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.zoom(1.1);
    }
  };
  const handleZoomOut = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.zoom(0.9);
    }
  };

  const chartOptions = {
    responsive: true,
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
          drag: {
            enabled:true,
            borderColor: 'rgba(255,99,132,0.2)',
            borderWidth: '1',
            backgroundColor: 'rgba(255,99,132,0.1)',
            threshold: 100
         },
          pinch: {
            enabled: true,
            speed: 0.1,
          },
          mode: 'x',
        },
        // pan: {
        //   enabled: true
        // },
      },
    },
  };

  return (
    <div data-testid = "line-chart">
      <h3>Line Graph</h3>
      <Line ref={chartRef} data={chartData} options={chartOptions} />
      <div>
      <button className="btn btn-secondary m-1" onClick={handleResetZoom}>Reset Zoom</button>
      <button className="btn btn-secondary m-1" onClick={handleZoomIn}>Zoom In</button>
      <button className="btn btn-secondary m-1" onClick={handleZoomOut}>Zoom Out</button>
      
      </div>
      
    </div>
  );
};

export default LineChart;
