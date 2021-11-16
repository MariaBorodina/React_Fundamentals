import { Button } from '@mui/material';

const MyButton = function (props) {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  );
};

export default MyButton;
