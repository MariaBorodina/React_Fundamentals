import { render, screen } from '@testing-library/react';
import Header from '../Header';

const individuumName = 'Vasya Pupkin';

test('should have users name', () => {
  render(<Header individuumName={individuumName}/>);
  const linkElement = screen.getByText(individuumName);
  expect(linkElement).toBeInTheDocument();
});

test('should have logo', () => {
  render(<Header individuumName={individuumName}/>);
  const linkElement = screen.getByAltText('Logo');
  expect(linkElement).toBeInTheDocument();
});
