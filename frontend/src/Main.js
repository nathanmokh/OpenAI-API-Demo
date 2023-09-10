import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid, SpeedDial, SpeedDialAction } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import SocialMedia from "./components/SocialMedia";
import Marketing from "./components/Marketing";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import EditIcon from "@mui/icons-material/Edit";
import Email from "./components/Email";

const actions = [
  { icon: <TwitterIcon />, name: "Social Media" },
  { icon: <EmailIcon />, name: "Email" },
  // { icon: <PersonalVideoIcon />, name: "Marketing" },
];

function Main() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOptionSelect = (optionName) => {
    setSelectedOption(optionName);
    setOpen(false); // Close the Speed Dial after an option is selected
  };

  const renderSelectedText = () => {
    switch (selectedOption) {
      case "Social Media":
        // return "This is Social Media text.";
        return <SocialMedia />;
      case "Email":
        return <Email />;
      // case "Marketing":
      //   return <Marketing />;
      default:
        return "Welcome to my app, click the button on the bottom right to get started.";
    }
  };

  return (
    <div className="Main">
      <Container fixed>
        <Grid spacing={10}>
          <div>{renderSelectedText()}</div>
        </Grid>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<EditIcon style={{ color: "white" }} />}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleOptionSelect(action.name)}
            />
          ))}
        </SpeedDial>
      </Container>
    </div>
  );
}

export default Main;
