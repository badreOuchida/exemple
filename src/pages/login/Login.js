import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useStyles } from "./style";
import UserPool from "../../UserPool";
import { useLogin } from "../../customHooks/useLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      await useLogin(
        { Username: username, Password: password },
        { Username: username, Pool: UserPool }
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setUsername("");
    setPassword("");
  };
  const classes = useStyles();
  return (
    <Box className={classes.boxStyle}>
      <Grid sx={{ margin: "25px 0px" }}>
        <img src="logo.png" alt="logo" />
      </Grid>
      <Grid sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#fff" }} variant="h5">
          Please enter your
        </Typography>
        <Typography sx={{ color: "#fff" }} variant="h5">
          QuickBook Credentials
        </Typography>
      </Grid>
      <Grid sx={{ margin: "25px 0px" }}>
        <form className="loginForm" onSubmit={HandleSubmit}>
          <Grid sx={{ margin: "10px 0px" }}>
            <TextField
              placeholder="Username"
              variant="outlined"
              className={classes.loginInput}
              size="small"
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </Grid>
          <Grid sx={{ margin: "10px 0px" }}>
            <TextField
              placeholder="Password"
              variant="outlined"
              className={classes.loginInput}
              size="small"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </Grid>
          <Grid sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              className={classes.bntStyle}
              type="Submit"
              size="small"
            >
              login
            </Button>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
}
