import { Grid, ListItem,  Typography } from "@mui/material";
import MyButton from "../Button/Button";
import Field from '../Field/Field';
import PropTypes from 'prop-types';

const CourseCard = ({item}) => {
    return (
    <ListItem>
        <Grid container direction='row'>

          <Grid container  item xs={8} md={9} direction='column'>
            <Typography variant='h2'>{item.title}</Typography>
            <Typography variant='p'>{item.description}</Typography>
          </Grid>

          <Grid item xs={4} md={3} >
            <Grid container direction='column'>
              <Field name="Authors" value={item.authorList}> </Field>
              <Field name="Duration" value={item.duration} > </Field>
              <Field name="Created" value={item.creationDate} > </Field>

              <MyButton>Show course</MyButton>
            </Grid>
          </Grid>

        </Grid>
    </ListItem>
    )
}

CourseCard.propTypes = {
  title: PropTypes.string,
  description:  PropTypes.string,
  authorList:  PropTypes.string,
  duration:  PropTypes.number,
  creationDate:  PropTypes.string
};
 
export default CourseCard;
