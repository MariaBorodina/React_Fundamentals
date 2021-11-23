import { OutlinedInput, InputLabel, Stack } from '@mui/material';

const Input = function (props) {
  return (
    <Stack>
      <InputLabel>{props.label}</InputLabel>
      <OutlinedInput {...props} />
    </Stack>
  );
};

export default Input;
