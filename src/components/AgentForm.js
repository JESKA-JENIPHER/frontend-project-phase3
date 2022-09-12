import {Box,Button,FormControl,FormHelperText,Input,InputLabel} from "@mui/material";
import React, { useState } from "react";
import { Container } from "@mui/system";

const AgentForm = ({ handlePosting }) => {
  const [formData, setFormData] = useState({
    name: "",
    id_Number: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://sporty-sport.herokuapp.com/agents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        handlePosting(data);
      });

    setFormData({
      name: "",
      id_Number: "",
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <Container className="formContainer">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Add Agent Form
        </div>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <FormControl sx={{ m: 1, width: "35ch" }}>
              <InputLabel>Full Name</InputLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <FormHelperText>Please Enter Full Name</FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: "35ch" }}>
              <InputLabel>id_Number</InputLabel>
              <Input
                name="id_Number"
                value={formData.id_Number}
                onChange={handleChange}
              />
              <FormHelperText>Agent's ID</FormHelperText>
            </FormControl>
          </div>
        </Box>
        <div>
          <FormControl
            sx={{ display: "flex", flexWrap: "wrap", m: 1, width: "10ch" }}
          >
            <Button variant="outlined" type="submit" onClick={handleSubmit}>
              SUBMIT
            </Button>
          </FormControl>
        </div>
      </Container>
    </div>
  );
};

export default AgentForm;
