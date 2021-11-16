import {
  Grid, Paper, Typography, Link,
} from '@mui/material';
import { useParams } from 'react-router';
import Field from '../Field/Field';
import { mockedCoursesList, mockedAuthorsList } from '../../mockData/data';
// import { Link } from "react-router-dom";

const CourseInfo = function (props) {
  let { courseId } = useParams();
  courseId = courseId.substring(courseId.indexOf(':') + 1, courseId.length);

  const course = mockedCoursesList.find((c) => c.id === courseId);

  if (!course) {
    return (
      <Typography variant="h3">Cannot find such course</Typography>
    );
  }

  const authorList = course.authors.map((authorId) => ({
    name: mockedAuthorsList.find((author) => author.id === authorId)?.name,
    id: authorId,
  }));

  return (
    <Paper>
      <Link href="/courses" className="goBackLink">&#60; Back to courses</Link>

      <Typography variant="h2">{course.title}</Typography>

      <Grid container direction="row" spacing={4}>
        <Grid item xs={8}>
          <Typography variant="p">{course.description}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Grid container direction="column" spacing={2}>
            <Field name="ID" value={course.id}> </Field>
            <Field name="Duration" value={course.duration}> </Field>
            <Field name="Created" value={course.creationDate}> </Field>
            <Field name="Authors" value=""> </Field>
            {authorList.map((author) => (
              <Grid item key={author.id}>
                {' '}
                <Typography variant="p">{author.name}</Typography>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  );
};

export default CourseInfo;
