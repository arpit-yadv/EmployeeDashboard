import React from 'react';
import { render, screen, fireEvent, getByTestId, waitFor, getByText } from '@testing-library/react';
import AvgSalaryGraphByField from './AvgSalaryGraphByField';
import { Constants } from '../Utils/Constants';
import { act } from 'react-dom/test-utils';


jest.mock('react-chartjs-2', () => ({
  Line: () => null,
  Bar: () => null,
}));
jest.doMock('./SearchForm', () => {
  const SearchForm = () => <div />;
  return SearchForm;
});

const data1 = { fields: [ 'Engineering', 'Sales' ], elements: [ 55000, 42500 ] };


describe('AvgSalaryGraphByField', () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementationOnce(cb => cb()());
    jest.spyOn(React, "useState").mockImplementationOnce(cb => cb()());
    AverageSalaryByField = jest.fn().mockResolvedValue(data1);
    
  });
  it('renders the component with initial data', async () => {
    const data = [
      { id: 1, field: 'Engineering', salary_in_usd: 50000 },
      { id: 2, field: 'Engineering', salary_in_usd: 60000 },
      { id: 3, field: 'Sales', salary_in_usd: 40000 },
      { id: 4, field: 'Sales', salary_in_usd: 45000 },
    ];
    const sortByField = 'field';
    const sortText = 'Country';
    // Cache original functionality
  const realUseState = React.useState

  // Stub the initial state
  const stubInitialState = ['stubdata']

  // Mock useState before rendering your component
  const AverageSalaryByField = jest.fn();
  const SearchForm = jest.fn();
  jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => realUseState(stubInitialState));


    await act( async () => {
        render( <AvgSalaryGraphByField data={data} sortByField={sortByField} sortText={sortText} />);
      });
      // Assert that the component renders correctly
      expect(screen.getByTestId('average-graph-heading')).toBeInTheDocument();
      expect(screen.getByTestId('filter-form')).toBeInTheDocument();
      expect(screen.getByTestId('change-graph-button')).toBeInTheDocument();
      expect(screen.getByText('Change Graph Type')).toBeInTheDocument();
      expect(screen.getByText('Search')).toBeInTheDocument();


    
  });

  test('changes the graph type when the button is clicked', async () => {
    const data = [
      { id: 1, field: 'Engineering', salary_in_usd: 50000 },
      { id: 2, field: 'Engineering', salary_in_usd: 60000 },
      { id: 3, field: 'Sales', salary_in_usd: 40000 },
      { id: 4, field: 'Sales', salary_in_usd: 45000 },
    ];
    const sortByField = 'field';
    const sortText = 'Field';

    await act( async () => {
      render( <AvgSalaryGraphByField data={data} sortByField={sortByField} sortText={sortText} />);
    });

    // Assert the initial graph type
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();

    // Click the button to change the graph type
    fireEvent.click(screen.getByTestId('change-graph-button'));

    // Assert the updated graph type
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
  });


});
