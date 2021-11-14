import { Button, Grid, Box, Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Input from '../Input/Input';
import { useState } from "react";
import HttpUtils from "../../utils/HttpUtils";


const Login = () => {

    document.title = "Login";

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({
        isError: false,
        message: ""
    });

    let history = useHistory();


    const login = async () =>
    {
        const REGISTER_URL = "/login";

        const response = await HttpUtils.post(REGISTER_URL, data);

        if(!response["successful"]) {
            setError({
                isError: true,
                message:  response["result"] || (response["errors"] && response["errors"].toString())
            });

        }
        else
        {
            setError({
                isError: false,
                message: ""
            });

            history.push("/courses");
        }
    }


    const handleLogin = (e) => {
        e.stopPropagation();
        login();
    };


    return (
        <>
    <Typography variant="h2">Login</Typography>

    {/* <form onSubmit={(e) => handleLogin}> */}
                <Grid container spacing={8} direction="column" className="inputForm">

                    <Grid item className="errorMessage"   display={!error.isError ? "none" : "initial"}>
                        <Typography variant="p" >{error.message}</Typography>
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
                        <Button type="submit" onClick={handleLogin}>Login</Button>
                    </Grid>
                    <Grid item>
                        <Box direction="row">
                            <Typography variant="body1" >If you don't have an account you can </Typography>
                            <Link to="/registration">Register</Link>
                        </Box>
                    </Grid>
                </Grid>
                {/* </form> */}
    </>
    );
}

export default Login;
