import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { mockData } from '../../Utils/TestConstants';

describe('Testing Card Component', () => {
  test('renders the component with the correct text', () => {
    render(<Card imageLink = {mockData.cardDetails.imageLink} cardDetails = {mockData.cardDetails.cardDetails} cardText = {mockData.cardDetails.cardText} cardTitle = {mockData.cardDetails.cardTitle} />);
    const textElement = screen.getByTestId('card-title');
    expect(textElement).toBeInTheDocument();
  });

});
