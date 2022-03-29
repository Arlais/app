import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { ThemeContext } from "../ThemeContext";

const Login = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [btn, setBtn] = useState("");
  const [token, setToken] = useState(null);
  //const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#216eab" };
  const txtStyle = { margin: "6px 0" };
  const btnStyle = { margin: "8px 0" };
  useEffect(() => {
    fetch(`localhost:8080/v1/auth`, {
      method: "POST",
      body: `{\"email\" : \"${user}\",\n" +
                "\"password\" : \"${pass}\"}`,
    }).then((response) => {
      setToken(response.token);
      console.log(token);
    });
  }, [btn]);
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <SecurityOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField
          value={""}
          onChange={(e) => setUser(e.target.value)}
          placeholder={"Enter username"}
          style={txtStyle}
          fullWidth
          required
        />
        <TextField
          value={""}
          onChange={(e) => setPass(e.target.value)}
          placeholder={"Enter password"}
          type={"password"}
          fullWidth
          required
        />
        <FormControlLabel control={<Checkbox />} label="Remember username" />
        <Button
          type={"submit"}
          onClick={() => setBtn("")}
          color={"primary"}
          fullWidth
          variant={"contained"}
          style={btnStyle}
        >
          Sign in
        </Button>
        <Button
          onClick={() => {
            if (state.isDarkMode) {
              dispatch("SET_LIGHT_MODE");
            } else {
              dispatch("SET_DARK_MODE");
            }
          }}
          color={"primary"}
          fullWidth
          variant={"contained"}
          style={btnStyle}
          className={`button-${state.isDarkMode ? "dark" : "light"}`}
        >
          colors
        </Button>
        <Typography>
          <Link href={"#"}>Forgot password?</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
