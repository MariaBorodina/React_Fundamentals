import { Button, Grid, Box, Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Input from '../Input/Input';
import { useState } from "react";
import HttpUtils from "../../utils/HttpUtils";


const Registration = () => {
    document.title = "Registration";

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState({
        isError: false,
        message: ""
    });

    let history = useHistory();

const register = async () =>
{
    const REGISTER_URL = "/register";

    const response = await HttpUtils.post(REGISTER_URL, data);

    if(!response["successful"]) {
        setError({
            isError: true,
            message: response["errors"].toString()
        });

    }
    else
    {
        setError({
            isError: false,
            message: ""
        });

        history.push("/Login");
    }
}


const handleRegister = (e) => {
    e.stopPropagation();
    register();
};

    return (
        <>
            <Typography variant="h2">Registration</Typography>

            <form onSubmit={(e) => handleRegister}>
                <Grid container spacing={8} direction="column" className="inputForm">

                    <Grid item className="errorMessage"   display={!error.isError ? "none" : "initial"}>
                        <Typography variant="p" >{error.message}</Typography>
                    </Grid>

                    <Grid item>
                        <Input label="Name" 
                            placeholder="Enter name" 
                            value={data.name}
                            onChange={(e) => setData({...data, name:e.target.value})} />
                    </Grid>
                    <Grid item>
                        <Input label="Email" placeholder="Enter email" 
                            value={data.email}
                            onChange={(e) => setData({...data, email:e.target.value})} />
                    </Grid>
                    <Grid item>
                        <Input label="Password" placeholder="Enter password" 
                            value={data.password}
                            onChange={(e) => setData({...data, password:e.target.value})} />
                    </Grid>
                    <Grid item>
                        <Button type="submit" >Registration</Button>
                    </Grid>
                    <Grid item>
                        <Box direction="row">
                            <Typography variant="body1" >If you have an account you can </Typography>
                            <Link to="/Login">Login</Link>
                        </Box>
                    </Grid>
                </Grid>
                </form>
        </>
    );
}

export default Registration;