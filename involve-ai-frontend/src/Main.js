import React from "react";
import Container from "@mui/material/Container";
import {
  Card,
  Grid,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";

const actions = [
  { icon: <TwitterIcon />, name: "Social Media" },
  { icon: <EmailIcon />, name: "Email" },
  { icon: <PersonalVideoIcon />, name: "Marketing" },
];
function Main() {
  return (
    <div className="Main">
      <Container fixed>
        <Grid spacing={10}></Grid>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Container>
    </div>
  );
}

export default Main;
