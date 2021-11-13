import { Button, Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Input from '../Input/Input';

const Registration = () => {
    document.title = "Registration";

const handleClick = () => {
    
};

    return (
        <>
            <Typography variant="h2">Registration</Typography>

                <Grid container spacing={8} direction="column" className="inputForm">
                    <Grid item>
                        <Input label="Name" placeholder="Enter name"></Input>
                    </Grid>
                    <Grid item>
                        <Input label="Email" placeholder="Enter email"></Input>
                    </Grid>
                    <Grid item>
                        <Input label="Password" placeholder="Enter password"></Input>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleClick}
                        >Registration</Button>
                    </Grid>
                    <Grid item>
                        <Box direction="row">
                            <Typography variant="body1" >If you have an account you can </Typography>
                            <Link to="/Login">Login</Link>
                        </Box>
                    </Grid>
                </Grid>
        </>
    );
}

export default Registration;