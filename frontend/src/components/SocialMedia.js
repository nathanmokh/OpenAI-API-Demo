import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import axios from "axios";

const socialMediaPlatforms = [
  { name: "Twitter", icon: <TwitterIcon /> },
  { name: "Facebook", icon: <FacebookIcon /> },
  { name: "Instagram", icon: <InstagramIcon /> },
  // Add more social media platforms as needed
];

const sendDataToServer = async (formData, setGeneratedPostFunction) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    // Replace with your server endpoint URL
    const url = "http://inolv-LoadB-FGA7K0OPYOZB-2053e03bfd630ded.elb.us-east-1.amazonaws.com:8080/api/socialMedia"; // Change this to your server's URL
    console.log("Sending data to " + url)

    // Send a POST request to your server with the form data
    const response = await axios.post(url, formData, { headers });

    // Handle the server response here (e.g., show a success message)
    console.log("Server Response:", response.data);
    setGeneratedPostFunction(response.data);
  } catch (error) {
    // Handle any errors that occur during the request (e.g., show an error message)
    console.error("Error:", error);
  }
};

const departmentOptions = ["Customer Service", "Marketing", "Sales"];
const productOrServiceOptions = ["Product", "Service"];

function SocialMedia() {
  // State variables to store input values
  const [formData, setFormData] = useState({
    social_media_platform: "",
    brand: "",
    product_or_service: "",
    product_or_service_name: "",
    product_service_description: "",
    department: "",
    age_demographic_min: "",
    age_demographic_max: "",
    use_emojis: false,
  });
  const [generated_post, set_generated_post] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const inputValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToServer(formData, set_generated_post);
    // You can perform actions with the form data here
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Generate a Social Media Post!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Social Media Platform *</InputLabel>
              <Select
                name="social_media_platform"
                value={formData.social_media_platform}
                onChange={handleInputChange}
                required
                label={"Social Media Platform"}
              >
                {socialMediaPlatforms.map((platform, index) => (
                  <MenuItem key={index} value={platform.name}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {platform.icon}
                      <span style={{ marginLeft: "8px" }}>{platform.name}</span>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              placeholder="Example: Epic Games"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Product or Service? *</InputLabel>
              <Select
                name="product_or_service"
                value={formData.product_or_service}
                onChange={handleInputChange}
                required
                label="Product or Service?"
              >
                {productOrServiceOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Product or Service Name"
              name="product_or_service_name"
              value={formData.product_or_service_name}
              onChange={handleInputChange}
              placeholder="Example: Unreal Engine 5"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product/Service Description"
              name="product_service_description"
              value={formData.product_service_description}
              onChange={handleInputChange}
              placeholder="Example: A new video game engine with cutting edge graphics!"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Department *</InputLabel>
              <Select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                label="Department"
              >
                {departmentOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Min Age Demographic"
              name="age_demographic_min"
              type="number"
              value={formData.age_demographic_min}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Max Age Demographic"
              name="age_demographic_max"
              type="number"
              value={formData.age_demographic_max}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <label>
              Use Emojis
              <Checkbox
                name="use_emojis"
                checked={formData.use_emojis}
                onChange={handleInputChange}
              />
            </label>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Create Post
        </Button>
      </form>
      <br />
      <Paper>
        <h1>{generated_post}</h1>
      </Paper>
      <Typography>
        Note: This was a small project I built for a programming challenge, it automates creating a social media
        post for you. This tool uses the Langchain Library, OpenAI API, and I put it together using FastAPI and Docker. My FastAPI
        instance and React UI instance (the one you're currently interacting with) are currently deployed to AWS ECS behind load balancers independently, meaning they operate as
        independent microservices and can scale up separately depending on load. The code for this is, including the deployment process, is hosted on my GitHub
        (linked in the UI component on the bottom right of your screen).
      </Typography>
    </Container>
  );
}

export default SocialMedia;
