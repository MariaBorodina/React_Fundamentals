import { Button, Grid, Box, Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Input from '../Input/Input';
import { useState } from "react";



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
    const API_URL = "http://localhost:3000";
    const REGISTER_URL = "/register";

    const response = await fetch( API_URL + REGISTER_URL,
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        } );

    if(!response.ok) {
        console.log("ERROR: " + response.statusText);
        const result = await response.json();
        console.log(JSON.stringify(result));

        setError({
            isError: true,
            message: response.statusText + ": " + result.errors.toString()
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


const handleRegister = () => {
    register();
};

    return (
        <>
            <Typography variant="h2">Registration</Typography>

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
                        <Button
                            onClick={handleRegister}
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