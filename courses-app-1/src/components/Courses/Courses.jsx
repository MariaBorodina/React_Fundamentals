import List from '@mui/material/List';
import CourseCard from '../CourseCard/CourseCard';

const Courses = (props) => {

    return (
        <List data-testid='courses'>
            {props.items.map(course => 
                <CourseCard item={course} key={course.id}></CourseCard>)}
        </List>
    );
}


export default Courses;