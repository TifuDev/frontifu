import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer links', () => {
  render(<Footer />);
  const linksElement = screen.getAllByText(/Link/i);
  expect(linksElement).toBeInTheDocument();
});
