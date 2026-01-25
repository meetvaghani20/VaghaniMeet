import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/DevPortfolio/i);
  expect(brandElement).toBeInTheDocument();
});
