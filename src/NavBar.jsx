import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userGet = JSON.parse(
      localStorage && localStorage.getItem("__user__")
    );
    if (userGet && userGet) {
      setLoggedIn(true);
    } else {
      history.push("/login");
    }
  }, []);

  const handleLoginButtonClick = () => {
    if (loggedIn && loggedIn) {
      localStorage.removeItem("__user__");
      history.push("/login");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Portfolio
          </Typography>
          <Button color="inherit" onClick={handleLoginButtonClick}>
            {loggedIn && loggedIn ? "Logout" : " Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
