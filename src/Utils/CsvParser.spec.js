import React from 'react';
import { parse } from 'papaparse';
import fetchData from './CsvParser'; 

// Mock the global fetch function
global.fetch = jest.fn().mockResolvedValue({
  text: jest.fn().mockResolvedValue('name,age,city\nJohn,25,New York\nJane,30,San Francisco'),
});

// Mock the parse function from papaparse
jest.mock('papaparse', () => ({
  parse: jest.fn(() => ({
    data: [
      { name: 'John', age: '25', city: 'New York' },
      { name: 'Jane', age: '30', city: 'San Francisco' },
    ],
  })),
}));

describe('fetchData', () => {
  test('fetches and parses CSV data correctly', async () => {
    const csvData = 'name,age,city\nJohn,25,New York\nJane,30,San Francisco';

    const result = await fetchData({ csvData });

    expect(fetch).toHaveBeenCalledWith(csvData);
    // expect(parse).toHaveBeenCalledWith('name,age,city\nJohn,25,New York\nJane,30,San Francisco', {
    //   header: true,
    // });
    expect(result).toEqual([
      { name: 'John', age: '25', city: 'New York' },
      { name: 'Jane', age: '30', city: 'San Francisco' },
    ]);
  });

  // test('handles error when fetching CSV data', async () => {
  //   const csvData = 'http://example.com/data.csv';
  //   const error = new Error('Failed to fetch data');

  //   global.fetch.mockRejectedValueOnce(error);

  //   console.error = jest.fn(); // Mock the console.error method

  //   const result = await fetchData({ csvData });

  //   expect(fetch).toHaveBeenCalledWith(csvData);
  //   expect(console.error).toHaveBeenCalledWith('Error fetching CSV data:', error);
  //   expect(result).toBeUndefined();
  // });
});
