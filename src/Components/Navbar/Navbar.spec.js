import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './NavBar';

describe('Navbar component', () => {
  test('renders the Navbar component correctly', () => {
    render(<Navbar />);
    
    // Check if the navbar brand text is rendered correctly
    const brandText = screen.getByText('Segwise.ai');
    expect(brandText).toBeInTheDocument();
    
    // Check if the nav links are rendered correctly
    const homeLink = screen.getByText('Home');
    const salaryInsightsLink = screen.getByText('Salary Insights');
    const locationInsightsLink = screen.getByTestId('location-insights');
    const employeeOnMapsLink = screen.getByText('Employee on Maps');
    const searchLink = screen.getByText('Search');
    
    expect(homeLink).toBeInTheDocument();
    expect(salaryInsightsLink).toBeInTheDocument();
    expect(locationInsightsLink).toBeInTheDocument();
    expect(employeeOnMapsLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });
});
