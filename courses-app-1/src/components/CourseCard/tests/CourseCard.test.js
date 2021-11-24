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
    const linkElement = screen.getByText(item.title);
    expect(linkElement).toBeInTheDocument();
  });

  test('CourseCard should display description', () => {
    render(<CourseCard item={item} />);
    const linkElement = screen.getByText(item.description);
    expect(linkElement).toBeInTheDocument();
  });

  test('CourseCard should display authors list', () => {
    render(<CourseCard item={item} />);
    const linkElement = screen.getByText(item.authorList);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('CourseCard should display duration in the correct format', () => {
    render(<CourseCard item={item} />);
    const linkElement = screen.getByText(item.duration);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('CourseCard should display created date in the correct format', () => {
    render(<CourseCard item={item} />);
    const linkElement = screen.getByText(item.creationDate);
    expect(linkElement).toBeInTheDocument();
  });