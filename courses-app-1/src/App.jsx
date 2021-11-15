import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import Courses from './components/Courses/Courses';
import theme from './theme';
import {mockedCoursesList, mockedAuthorsList} from './mockData/data';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Layout from './components/Layout';
import CourseInfo from './components/CourseInfo/CourseInfo';

function mapCourseToAuthors (course) {
  course.authorList = course.authors.map(authorId => mockedAuthorsList.find(author => author.id === authorId)?.name).join(", ");
  return course;
}


const App = () => {


  const courses = mockedCoursesList.map(mapCourseToAuthors);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router> 
          <Switch> 
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/courses">
              <Courses items={courses} />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/course/:courseId">
              <CourseInfo />
            </Route>
            <Route exact path="*">
              <Login />
            </Route> 

          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
