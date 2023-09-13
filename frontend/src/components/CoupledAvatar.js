import React from "react";
import { Avatar, Typography, Box } from "@mui/material"; // Import Typography and Box from MUI

function CoupledAvatar(props) {
    return (
        <Box display="flex" alignItems="center">
            <Avatar alt={props.alt} src={props.img} style={{ margin: "3px", marginRight: '10px' }} />
            <Typography variant="body1">{props.description}</Typography>
        </Box>
    );
}

export default CoupledAvatar;
