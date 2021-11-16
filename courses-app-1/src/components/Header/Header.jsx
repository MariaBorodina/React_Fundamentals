import { Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import MyButton from '../Button/Button';

const Header = function ({ individuumName }) {
  return (
    <Stack direction="row" className="header">
      <Logo />
      <Stack direction="row" className="right">
        <Typography>{individuumName}</Typography>
        <MyButton>Logout</MyButton>
      </Stack>
    </Stack>
  );
};

Header.propTypes = {
  individuumName: PropTypes.string,
};

export default Header;
