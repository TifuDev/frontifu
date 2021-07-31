import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders navbar home links', () => {
  render(<Navbar />);
  const homeElement = screen.getByText(/home/i);
  expect(homeElement).toBeInTheDocument();
});
