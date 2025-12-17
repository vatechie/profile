import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  const nameElement = screen.getByText(/Vishal Aggarwal/i);
  expect(nameElement).toBeInTheDocument();
});
