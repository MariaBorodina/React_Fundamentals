import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import theme from './theme';
import {mockedCoursesList, mockedAuthorsList} from './mockData/data';

function mapCourseToAuthors (course) {
  course.authorList = course.authors.map(authorId => mockedAuthorsList.find(author => author.id === authorId)?.name).join(", ");
  return course;
}


const App = () => {


  const courses = mockedCoursesList.map(mapCourseToAuthors);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header individuumName='Dave' />        
      <Courses items={courses} />
    </div>
    </ThemeProvider>
  );
}

export default App;
