// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SocialMedia from './components/SocialMedia';
import Email from './components/Email';
import Home from './components/Home';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

const actions = [
    { icon: <HomeIcon />, name: "Home" },
    { icon: <DescriptionIcon />, name: "Resume" },
    { icon: <TwitterIcon />, name: "Social Media Post Generator" },
    { icon: <GitHubIcon />, name: "GitHub Profile" },
];

function App() {
    return (
        <Router>
            <div className="App">
                <SpeedDialComponent actions={actions} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/createSocialPost" element={<SocialMedia />} />
                </Routes>
            </div>
        </Router>
    );
}

const SpeedDialComponent = ({ actions }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOptionSelect = (optionName) => {
        switch (optionName) {
            case "Social Media Post Generator":
                navigate('/createSocialPost')
                break;
            case "Home":
                navigate('/')
                break;
            case "Resume":
                navigate('/resume')
                break;
            case "GitHub Profile":
                window.open("https://github.com/nathanmokh", "_blank");
                break;
            default:
                break;
        }
    };

    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<MenuIcon />}
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
    );
}

export default App;
