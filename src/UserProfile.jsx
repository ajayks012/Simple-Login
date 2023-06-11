import React, { useEffect, useState } from "react";
import { Avatar, Typography, Card, CardContent, Grid } from "@mui/material";
import { users } from "./db/DataConstants";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

const UserProfile = () => {
  const temp = users[0];
  const [profile, setProfile] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const userGet = JSON.parse(
      localStorage && localStorage.getItem("__user__")
    );
    if (userGet && userGet) {
      setProfile(userGet);
    } else {
      history.push("/login");
    }
  }, []);

  const profileComponent = (
    <Grid
      container
      spacing={2}
      sx={{
        padding: 2,
      }}
    >
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            boxShadow: 5,
            padding: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Avatar alt="User Avatar" style={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" align="center" color="primary">
                  {profile && profile.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="secondary"
                >
                  {profile && profile.designation}
                </Typography>
                <Typography variant="body1">
                  {profile && profile.email}
                </Typography>
                <Typography variant="body1">
                  {profile && profile.phone}
                </Typography>
                <Typography variant="body1">
                  {profile && profile.location}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            boxShadow: 5,
            padding: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <CardContent>
            <Grid
              item
              container
              justifyContent="left"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} textAlign="left">
                <Typography variant="subtitle2" color="primary">
                  About Me
                </Typography>
                <Typography variant="body2">
                  {profile && profile.about}
                </Typography>
              </Grid>
              <Grid item container xs={12} alignItems="top">
                <Grid item xs={12} md={6} textAlign="left">
                  <Typography variant="subtitle2" color="primary">
                    Skills
                  </Typography>

                  <ul>
                    <Typography variant="body2">
                      {profile &&
                        profile.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                    </Typography>
                  </ul>
                </Grid>
                <Grid item xs={12} md={6} textAlign="left">
                  <Typography variant="subtitle2" color="primary">
                    Projects
                  </Typography>

                  <ul>
                    <Typography variant="body2">
                      {profile &&
                        profile.projects.map((project) => (
                          <li key={project}>{project}</li>
                        ))}
                    </Typography>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <>
      <NavBar />
      {profileComponent}
    </>
  );
};

export default UserProfile;
