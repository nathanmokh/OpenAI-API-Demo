import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const handleOptionSelect = (optionName) => {
    setSelectedOption(optionName);
    setOpen(false); // Close the Speed Dial after an option is selected
  };


  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => window.open("https://github.com/nathanmokh", "_blank")}>
              <CardContent>
                <Typography variant="h5">GitHub</Typography>
                <Typography variant="body2">
                  Click here to visit my GitHub profile.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => handleOptionSelect("Resume")}>
              <CardContent>
                <Typography variant="h5">Resume</Typography>
                <Typography variant="body2">
                  Click here to view my resume.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => navigate('/createSocialPost')}>
              <CardContent>
                <Typography variant="h5">Social Media</Typography>
                <Typography variant="body2">
                  Click here to demo my social media post generator!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

    </Container>
  );
}

export default Home;
