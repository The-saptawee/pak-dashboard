import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { CRUDKUB } from "../Api/CRUD";

export default function UserCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: name,
      password: password,
      address: address,
      contact: contact,
      line: line,
      email: email,
      favorite: favorite,
    };

    CRUDKUB("customers", "create", data);
    // fetch(`http://rhome19.thddns.net:5526/api/customers/create`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/form-data",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     alert(result["message"]);
    //     if (result["status"] === "ok") {
    //       window.location.href = "/";
    //     }
    //   });
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [line, setLine] = useState("");
  const [email, setEmail] = useState("");
  const [favorite, setFavorite] = useState("");

  return (
    <Container maxWidth="xs" style={{ marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" style={{ fontSize: "32px" }}>
          User
        </Typography>
        <form
          style={{
            width: "100%", // Fix IE 11 issue.
            marginTop: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="You Name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="contact"
                label="Contact"
                onChange={(e) => setContact(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="line"
                label="Line"
                onChange={(e) => setLine(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Favorite"
                label="Favorite"
                onChange={(e) => setFavorite(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
