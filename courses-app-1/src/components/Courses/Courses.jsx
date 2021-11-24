import { Paper } from '@mui/material';
import List from '@mui/material/List';
import CourseCard from '../CourseCard/CourseCard';

const Courses = (props) => {
    document.title = "Courses";

    return (
    <Paper>
        <List data-testid='courses'>
            {props.items.map(course => 
                <CourseCard item={course} key={course.id}></CourseCard>)}
        </List>
    </Paper>
    );
}


export default Courses;