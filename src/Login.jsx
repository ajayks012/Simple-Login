import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { users } from "./db/DataConstants";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const LoginContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(8),
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const LoginForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const TextFieldWrapper = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const history = useHistory();

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      console.log(email, password);
      let findUser = users.filter(
        (user) => user.email === email && user.password === password
      );
      if (findUser && findUser.length === 1) {
        console.log("login success", ...findUser);
        localStorage.setItem("__user__", JSON.stringify(...findUser));
        history.push("/profile");
      } else {
        console.log("error");
      }
    }
  };

  const loginComponent = (
    <LoginContainer component="main" maxWidth="xs">
      <Card sx={{ boxShadow: 5, padding: 5 }}>
        <CardContent>
          <Title component="h1" variant="h5">
            Login
          </Title>
          <Typography variant="subtitle2">
            Doesn't have an account yet? <a href="#">Sign Up</a>
          </Typography>
          <LoginForm>
            <TextFieldWrapper
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextFieldWrapper
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography variant="subtitle2">
              <a href="#">Forgot Password?</a>
            </Typography>
            <SubmitButton
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </SubmitButton>
          </LoginForm>
        </CardContent>
      </Card>
    </LoginContainer>
  );

  return (
    <>
      <NavBar />
      {loginComponent}
    </>
  );
};

export default Login;
