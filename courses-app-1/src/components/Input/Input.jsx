import { OutlinedInput, InputLabel,  Stack } from "@mui/material";

const Input = (props) => {
    return(
        <Stack>
            <InputLabel>{props.label}</InputLabel>
            <OutlinedInput {...props}>               
            </OutlinedInput>
        </Stack>
    );
}

export default Input;