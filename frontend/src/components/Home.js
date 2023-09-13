import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

// import ReactImage from "../../public/images/react.png"; // Import the image


function Home() {
  const navigate = useNavigate();

  // TODO: Cleanup and use map:
  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => window.open("https://github.com/nathanmokh", "_blank")}>
              <CardContent>
                <Typography variant="h5">GitHub</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => navigate("/Resume")}>
              <CardContent>
                <Typography variant="h5">Resume</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => navigate('/createSocialPost')}>
              <CardContent>
                <Typography variant="h5">Demo</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
