import { Chart as ChartJS } from "chart.js/auto";
import React, { useRef, useEffect } from 'react';
import { Bar  } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);

const BarGraph = ({chartData}) => {
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
          pinch: {
            enabled: true,
            speed: 0.1,
          },
          mode: 'x',
        },
        pan: {
          enabled: true
        },
      },
    },
  };

  return (
    <div data-testid = "bar-chart">
      <h3>Bar Graph</h3>
      <Bar data-testid = "bar-chart" ref={chartRef} data={chartData} options={chartOptions} />
      <button data-testid="reset-zoom" className="btn btn-secondary m-1" onClick={handleResetZoom}>Reset Zoom</button>
      <button data-testid = "zoom-in" className="btn btn-secondary m-1" onClick={handleZoomIn}>Zoom In</button>
      <button data-testid = "zoom-out" className="btn btn-secondary m-1" onClick={handleZoomOut}>Zoom Out</button>
      
    </div>
  );
};

export default BarGraph;
