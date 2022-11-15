import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { CRUDKUB } from "../Api/CRUD";
import axios from "axios";

export default function UserUpdate() {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://rhome19.thddns.net:5526/api/customers/${id}`)
      .then((res) => {
        // console.log(res.data);
        setName(res.data.name);
        setPassword(res.data.password);
        setAddress(res.data.address);
        setContact(res.data.contact);
        setLine(res.data.line);
        setEmail(res.data.email);
        setFavorite(res.data.favorite);
      });
  }, []);

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
    console.log(id);
    // CRUDKUB("customers", "update", data, id);

    axios
      .put(`http://rhome19.thddns.net:5526/api/customers/${id}`, data)
      .then((res) => {
        console.log(res);
        if (res.status === 500) {
          window.location.assign("/");
        }
      });
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
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" style={{ fontSize: "32px" }}>
          Customers
        </Typography>
        <form
          style={{
            width: "100%", // Fix IE 11 issue.
            marginTop: "20px",
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
                value={name}
                label="You Name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="address"
                value={address}
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
                value={contact}
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
                value={line}
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
                value={email}
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
                value={favorite}
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
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
