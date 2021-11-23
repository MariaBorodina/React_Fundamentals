import { render, screen } from '@testing-library/react';
import CourseCard from '../CourseCard';

const item = {
    title: "Title",
    description: "Sample CourseCard description",
    authorList:  "author1, author2, author3",
    duration:  "3",
    creationDate: "Nov 23, 2021"
  };


test('renders CourseCard component', () => {
  render(<CourseCard item={item} />);
  const linkElement = screen.getByTestId('courseCard');
  expect(linkElement).toBeInTheDocument();
});

test('CourseCard should display title', () => {
    render(<CourseCard item={item} />);
    const linkElement = screen.getByText('Title');
    expect(linkElement).toBeInTheDocument();
  });


