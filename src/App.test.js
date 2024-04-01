import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = newFunction();
  expect(linkElement).toBeInTheDocument();
});
function newFunction() {
  return screen.getByText(/learn react/i);
}

git push