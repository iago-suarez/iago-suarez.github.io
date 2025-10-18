import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('renders Publications heading', () => {
  render(<Home />);
  const headingElement = screen.getByRole('heading', { name: /Publications/i });
  expect(headingElement).toBeInTheDocument();
});
