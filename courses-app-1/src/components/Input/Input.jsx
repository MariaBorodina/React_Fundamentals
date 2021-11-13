import { OutlinedInput, InputLabel,  Stack } from "@mui/material";

const Input = ({label, placeholder}) => {
    return(
        <Stack>
            <InputLabel>{label}</InputLabel>
            <OutlinedInput placeholder={placeholder}>               
            </OutlinedInput>
        </Stack>
    );
}

export default Input;