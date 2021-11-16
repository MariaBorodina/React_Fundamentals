import { Paper } from '@mui/material';
import List from '@mui/material/List';
import CourseCard from '../CourseCard/CourseCard';

const Courses = function (props) {
  document.title = 'Courses';

  return (
    <Paper>
      <List>
        {props.items.map((course) => <CourseCard item={course} key={course.id} />)}
      </List>
    </Paper>
  );
};

export default Courses;
