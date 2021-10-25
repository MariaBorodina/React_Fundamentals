import { Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const Field = ({name, value}) => {
    return(
        <Grid container item xs={12} direction='row'>
            <Typography className='fieldName'>{name}:</Typography>
            <Typography className='fieldValue'>{value}</Typography>
        </Grid>
    )
};

Field.propTypes = {
    name: PropTypes.string,
    value:  PropTypes.node,
  };

export default Field;