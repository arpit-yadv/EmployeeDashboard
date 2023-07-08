import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MapContainer, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import MapComponent from './EmployeeByCountryMap';
import fetchData from '../Utils/CsvParser';
import countryCsvData from './../data/countryToCoordinateMap.csv';
import TotalDataByField from '../Utils/TotalDataByField';

jest.mock('react-leaflet', () => ({
  MapContainer: ({ children }) => <div>{children}</div>,
  CircleMarker: ({ children }) => <div>{children}</div>,
  TileLayer: () => null,
  Tooltip: ({ children }) => <div>{children}</div>,
}));

jest.mock('../Utils/CsvParser', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../Utils/TotalDataByField', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('MapComponent', () => {
  test('renders the component with map data and search form', async () => {
    const data1 = [
      { id: 1, field: 'Engineering', salary_in_usd: 50000 },
      { id: 2, field: 'Engineering', salary_in_usd: 60000 },
      { id: 3, field: 'Sales', salary_in_usd: 40000 },
      { id: 4, field: 'Sales', salary_in_usd: 45000 },
    ];
    const sortByField = 'field';
    const sortText = 'Field';

    const mapDataBuilderMock = jest.fn();

    fetchData.mockResolvedValue([]);
    TotalDataByField.mockResolvedValue({ fields: [], count: [] });
    mapDataBuilderMock.mockImplementationOnce(({ mapData, countryCoordinatesData }) => {
      expect(mapData).toEqual({ fields: [], count: [] });
      expect(countryCoordinatesData).toEqual([]);
    });

    render(
      <MapComponent data1={data1} sortByField={sortByField} sortText={sortText} />
    );

    expect(screen.getByText('Employees by Field')).toBeInTheDocument();

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith({ csvData: countryCsvData });
      expect(TotalDataByField).toHaveBeenCalledWith({ data: data1, sortByField });
    });

    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
