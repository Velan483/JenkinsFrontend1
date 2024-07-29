import { render, screen } from '@testing-library/react';
import Add from './Add';

jest.mock('axios');
jest.mock('react-router-dom');

test('renders Add Property data', () => {
  render(<Add />);
  const linkElement = screen.getByText('ADD PROPERTY DATA');
  expect(linkElement).toBeInTheDocument();
});


