import { OutlinedInput, InputLabel, Grid } from '@mui/material';

const HorizontalInput = function ({ label, placeholder }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <InputLabel>{label}</InputLabel>
      </Grid>
      <Grid item xs={9}>
        <OutlinedInput placeholder={placeholder} />
      </Grid>
    </Grid>
  );
};

export default HorizontalInput;
