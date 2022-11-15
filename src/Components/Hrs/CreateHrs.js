import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { CRUDKUB } from "../Api/CRUD";
import Stack from "@mui/material/Stack";

export default function UserCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: name,
      password: password,
      address: address,
      contact: contact,
      email: email,
      education: education,
      policy: policy,
      salary: salary,
      date: date,
      visit: visit,
      train: train,
      roleId: roleid,
    };

    CRUDKUB("hrs", "create", data);
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
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [policy, setPolicy] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [visit, setVisit] = useState("");
  const [train, setTrain] = useState("");
  const [roleid, setRoleid] = useState("");

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
          Hrs
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
                type={email}
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
                id="education"
                label="Education"
                onChange={(e) => setEducation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="policy"
                label="Policy"
                onChange={(e) => setPolicy(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                type="number"
                fullWidth
                id="salary"
                label="Salary"
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Date"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="visit"
                label="Visit"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setVisit(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="train"
                label="Train"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setTrain(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                label="Role"
                fullWidth
                id="roleId"
                onChange={(e) => setRoleid(e.target.value)}
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
