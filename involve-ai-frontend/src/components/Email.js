import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Checkbox, Paper } from "@mui/material";
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
      "Content-Type": "application/json", // Make sure this matches your server's expectations
      // Add any other headers as needed
    };
    // Replace with your server endpoint URL
    const url = "http://127.0.0.1:8080/api/email"; // Change this to your server's URL

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

function Email() {
  // State variables to store input values
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_company_name: "",
    sender_email: "",
    sender_phone_number: "",
    sender_occupation: "",
    prospect_company: "",
    prospect_name: "",
    prospect_industry: "",
    prospect_occupation: "",
    is_cold_email: false,
    product: "",
    product_description: "",
  });
  const [generated_email, set_generated_email] = useState("");

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
    sendDataToServer(formData, set_generated_email);
    // You can perform actions with the form data here
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create an Email
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Sender Name"
              name="sender_name"
              value={formData.sender_name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Sender Company Name"
              name="sender_company_name"
              value={formData.sender_company_name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Sender Email"
              name="sender_email"
              value={formData.sender_email}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Sender Phone Number"
              name="sender_phone_number"
              value={formData.sender_phone_number}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Sender Occupation"
              name="sender_occupation"
              value={formData.sender_occupation}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Prospect Company"
              name="prospect_company"
              value={formData.prospect_company}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Prospect Name"
              name="prospect_name"
              value={formData.prospect_name}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Prospect Industry"
              name="prospect_industry"
              value={formData.prospect_industry}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Prospect Occupation"
              name="prospect_occupation"
              value={formData.prospect_occupation}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Product"
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product Description"
              name="product_description"
              value={formData.product_description}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <label>
              Cold Email?
              <Checkbox
                name="is_cold_email"
                checked={formData.is_cold_email}
                onChange={handleInputChange}
              />
            </label>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Create Email
        </Button>
      </form>
      <Paper>
        <h1>{generated_email}</h1>
      </Paper>
    </Container>
  );
}

export default Email;
