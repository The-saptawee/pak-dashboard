import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ flexGrow: "1" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            style={{ marginRight: "10px" }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              PAK-LOCAl
            </Typography>
          </Link>

          <Link
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "30px",
            }}
            to="/user"
          >
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              USER
            </Typography>
          </Link>

          <Link
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "30px",
            }}
            to="/hrs"
          >
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              HRS
            </Typography>
          </Link>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "30px",
            }}
            to="/order"
          >
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              ORDER
            </Typography>
          </Link>

          <Link
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "30px",
            }}
            to="/factories"
          >
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              FACTORIES
            </Typography>
          </Link>

          <Link
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "30px",
            }}
            to="/material"
          >
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              MATERIAL
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
