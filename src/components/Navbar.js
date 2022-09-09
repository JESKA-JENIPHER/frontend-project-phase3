import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar
          sx={{
            alignItems: "center",
           
            display: "flex",
            flexWrap: "inherit",
            justifyContent: "space-between",
          }}
        >
          <Typography
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontSize: "25px",
              fontWeight: 900,
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            SPORTY_SPORT
          </Typography>

          <Typography
            onClick={() => navigate("/players")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: 700,
              color: "#101415",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Players
          </Typography>

          <Typography
            onClick={() => navigate("/agents")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: 700,
              color: "#101415",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Agents
          </Typography>

          <Typography
            onClick={() => navigate("/teams")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: 700,
              color: "#101415",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Teams
          </Typography>

          <Typography
            onClick={() => navigate("/about")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: 700,
              color: "#101415",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            About_Us
          </Typography>

          <Typography
            onClick={() => navigate("/contact")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: 700,
              color: "#101415",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Contact_Us
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
