import { Accordion, AccordionDetails, AccordionSummary, Card, CardActionArea, CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CoupledAvatar from "./CoupledAvatar";

const programmingLanguages = [
    {
        name: "Node.js & JavaScript",
        image: "/images/javascript_logo.png",
        description: "I have experience with JavaScript.",
        expandedDescription: <NodeFrameworks />
    },
    {
        name: "Python",
        image: "/images/python_logo.png",
        description: "I have experience with Python.",
        expandedDescription: <PythonFrameworks />
    },
    {
        name: "C#",
        image: "/images/c_sharp_logo.png",
        description: "I have experience with C#.",
        expandedDescription: <CSharpFrameworks />
    },
    {
        name: "R",
        image: "/images/r_logo.png",
        description: "I have experience with R.",
        expandedDescription: ""
    },
];

function NodeFrameworks() {
    return (
        <div>
            <CoupledAvatar
                img="/images/react_logo.png"
                description="React - Rogue BASE Platform Project"
            />
            <CoupledAvatar
                img="/images/vue_js_logo.png"
                description="Vue.js - Manulife Investment Portal Project"
            />
        </div>
    );
}

function PythonFrameworks() {
    return (
        <div>
            <CoupledAvatar
                img="/images/flask_logo.png"
                description={"Flask - Rogue BASE Platform Project, Simulmedia ETL Services"}
            />
            <CoupledAvatar
                img="/images/fast_api_logo.png"
                description="FastAPI - This project"
            />
        </div>
    );
}


function CSharpFrameworks() {
    return (
        <div>
            <CoupledAvatar
                img="/images/dot_net_logo.png"
                description={".NET - Desktop Applications at John Hancock"}
            />
            <CoupledAvatar
                img="/images/fast_api_logo.png"
                description="FastAPI - This project"
            />
        </div>
    );
}

function PreviousTechnologyGrid() {
    return (
        <Grid container spacing={3} columns={2} style={{ marginTop: '10px' }}>
            {programmingLanguages.map((language, index) => (
                <Grid item xs={1} key={index}>
                    <Card style={{ 'borderRadius': '75px' }}>
                        <CardActionArea>
                            <img src={language.image} alt={language.name} style={{ width: '100%' }} />
                            <CardContent>
                                <Typography variant="h5">{language.name}</Typography>
                                <Accordion style={{ background: 'transparent', boxShadow: 'none' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    // style={{'display': 'none'}}
                                    >
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {language.expandedDescription}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

function Resume() {
    return (
        <Container maxWidth="md">
            <PreviousTechnologyGrid />
        </Container>
    );
}

export default Resume;
