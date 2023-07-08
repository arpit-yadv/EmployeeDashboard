import React from 'react';
import { render, screen } from '@testing-library/react';
import AverageSalaryGraphs from './AverageSalaryGraphs';
import { Constants } from '../../Utils/Constants';
import { act } from 'react-dom/test-utils';

// Mocked data
const mockedData = {
  data : [
    { id: 1, field: 'Engineering', salary_in_usd: 50000 },
    { id: 2, field: 'Engineering', salary_in_usd: 60000 },
    { id: 3, field: 'Sales', salary_in_usd: 40000 },
    { id: 4, field: 'Sales', salary_in_usd: 45000 },
  ],
  sortByField: "field",
  sortText: "Field",
};

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
  Bar: () => null,
}));

jest.doMock('./AvgSalaryGraphByField', () => ({
  AvgSalaryGraphByField: () => null,
}));

describe('AverageSalaryGraphs component', () => {
  test('renders the AverageSalaryGraphs component correctly', async() => {
    const AvgSalaryGraphByField = jest.fn();
    // Render the component with mocked data
    await act( async () => {
      render( <AverageSalaryGraphs data={mockedData.data}  />);
    });

    // Check if the component renders the title correctly
    const titleElement = screen.getByText('AverageSalary Graphs');
    expect(titleElement).toBeInTheDocument();

    // Check if AvgSalaryGraphByField component is rendered for each entry in Constants.AVERAGE_SALARY_GRAPHS
    Object.entries(Constants.AVERAGE_SALARY_GRAPHS).forEach(([key, value]) => {
      const text = "Average Salary over "+ value;
      const graphElement = screen.getByText(text);
      expect(graphElement).toBeInTheDocument();
    });
  });
});
