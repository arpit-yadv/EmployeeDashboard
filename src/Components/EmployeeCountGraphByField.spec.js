import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeCountGraphByField from './EmployeeCountGraphByField';
import { act } from 'react-dom/test-utils';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
  Bar: () => null,
}));
jest.doMock('./SearchForm', () => {
  const SearchForm = () => <div />;
  return SearchForm;
});
const data1 = {
  fields: ['Engineering', 'Sales'],
  count: [110, 85],
}

describe('EmployeeCountGraphByField', () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementationOnce(cb => cb()());
    jest.spyOn(React, "useState").mockImplementationOnce(cb => cb()());
    TotalDataByField = jest.fn().mockResolvedValue(data1);
    
     // .... other things ....
  });
  it('renders the component with employee count data', async () => {
    const data = [
      { id: 1, field: 'Engineering', employeeCount: 50 },
      { id: 2, field: 'Engineering', employeeCount: 60 },
      { id: 3, field: 'Sales', employeeCount: 40 },
      { id: 4, field: 'Sales', employeeCount: 45 },
    ];
    const sortByField = 'field';
    const sortText = 'Country';
      // Cache original functionality
  const realUseState = React.useState

  // Stub the initial state
  const stubInitialState = ['stubdata']

  // Mock useState before rendering your component
  const TotalDataByField = jest.fn();
  const SearchForm = jest.fn();
  jest
  .spyOn(React, 'useState')
  .mockImplementationOnce(() => realUseState(stubInitialState));

    await act(async()=>{
      render(
        <EmployeeCountGraphByField
          data={data}
          sortByField={sortByField}
          sortText={sortText}
        />
      );
    })
    

    // Assert the initial state of the component
    expect(screen.getByTestId(`employee-count-heading`)).toBeInTheDocument();
    // Assert other expectations for the rendered component
  });

  test('handles filter and graph type change', async () => {
    const data = [
      { id: 1, field: 'Engineering', employeeCount: 50 },
      { id: 2, field: 'Engineering', employeeCount: 60 },
      { id: 3, field: 'Sales', employeeCount: 40 },
      { id: 4, field: 'Sales', employeeCount: 45 },
    ];
    const sortByField = 'field';
    const sortText = 'Field';


    await act(async()=>{
      render(
        <EmployeeCountGraphByField
          data={data}
          sortByField={sortByField}
          sortText={sortText}
        />
      );
    })

    // Simulate filter input
    fireEvent.change(screen.getByTestId('search-input'), {
      target: { value: '60' },
    });
    fireEvent.change(screen.getByTestId('dropdown-test'), {
      target: { value : 'Engineering' },
    });
    fireEvent.click(screen.getByText('Search'));

    // Simulate graph type change
    fireEvent.click(screen.getByText('Change Graph Type'));
    
  });
});
