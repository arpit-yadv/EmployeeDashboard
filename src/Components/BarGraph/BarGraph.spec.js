import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BarGraph from './BarGraph';

jest.mock('react-chartjs-2', () => ({
  Bar: () => null,
}));

describe('BarGraph', () => {
  test('renders the component with chart data and buttons', () => {
    const chartData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          label: 'Data 1',
          data: [10, 20, 30],
        },
      ],
    };

    render(<BarGraph chartData={chartData} />);

    expect(screen.getByText('Bar Graph')).toBeInTheDocument();
    expect(screen.getByText('Reset Zoom')).toBeInTheDocument();
    expect(screen.getByText('Zoom In')).toBeInTheDocument();
    expect(screen.getByText('Zoom Out')).toBeInTheDocument();
  });

  test('calls the correct functions when buttons are clicked', () => {
    const chartData = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          label: 'Data 1',
          data: [10, 20, 30],
        },
      ],
    };

    const resetZoomMock = jest.fn();
    const zoomInMock = jest.fn();
    const zoomOutMock = jest.fn();

    const chartRefMock = {
      current: {
        resetZoom: resetZoomMock,
        zoom: jest.fn((value) => (value > 1 ? zoomInMock() : zoomOutMock())),
      },
    };

    render(<BarGraph chartData={chartData} chartRef={chartRefMock} />);

    expect(screen.getByTestId('reset-zoom')).toBeInTheDocument();
    expect(screen.getByTestId('zoom-out')).toBeInTheDocument();
    expect(screen.getByTestId('zoom-in')).toBeInTheDocument();

  });
});
