import { render, screen } from '@testing-library/react';
import Courses from '../Courses';

const items= [ 
  {
    title: "Title1",
    description: "Sample CourseCard description1",
    authorList:  "author1, author3",
    duration:  "301",
    creationDate: "Nov 21, 2021"
  },
  {
    title: "Title2",
    description: "Sample CourseCard description2",
    authorList:  "author2, author3",
    duration:  "302",
    creationDate: "Nov 22, 2021"
  },
  {
    title: "Title3",
    description: "Sample CourseCard description3",
    authorList:  "author1, author2, author3",
    duration:  "302",
    creationDate: "Nov 23, 2021"
  },
];


test('should display amount of CourseCard equal length of courses array', () => {
  render(<Courses items={items} />);
  const linkElement = screen.getAllByTestId('courseCard');
  expect(linkElement.length).toEqual(items.length);
});


test('should display Empty container if courses array length is 0', () => {
  render(<Courses items={[]} />);
  const linkElement = screen.getByTestId('courses');
  expect(linkElement).toBeEmptyDOMElement();
});
