import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
<<<<<<< HEAD

test('Is the link correct', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement.href).toContain('.org');
});
=======
>>>>>>> 9459efac0f2b916479b2ae593cab4bc7dfe2d0b1
