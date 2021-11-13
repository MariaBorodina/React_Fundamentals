import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import theme from './theme';
import {mockedCoursesList, mockedAuthorsList} from './mockData/data';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function mapCourseToAuthors (course) {
  course.authorList = course.authors.map(authorId => mockedAuthorsList.find(author => author.id === authorId)?.name).join(", ");
  return course;
}


const App = () => {


  const courses = mockedCoursesList.map(mapCourseToAuthors);

  return (
    <ThemeProvider theme={theme}>
      <Router> 
        <Switch> 
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/courses">
            <div className="App">
              <Header individuumName='Dave' /> 
              <Courses items={courses} />
            </div>
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
           <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <Login />
          </Route> 

        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
