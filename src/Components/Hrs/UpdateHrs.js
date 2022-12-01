import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { CRUDKUB } from "../Api/CRUD";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateHrs = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://rhome19.thddns.net:5526/api/hrs/${id}`).then((res) => {
      //   console.log(res.data);
      setName(res.data.name);
      setPassword(res.data.password);
      setAddress(res.data.address);
      setContact(res.data.contact);
      setEducation(res.data.education);
      setEmail(res.data.email);
      setPolicy(res.data.policy);
      setSalary(res.data.salary);
      setDate(res.data.date);
      setVisit(res.data.visit);
      setTrain(res.data.train);
      setRoleid(res.data.roleId);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: name,
      password: password,
      address: address,
      contact: contact,
      education: education,
      email: email,
      policy: policy,
      salary: salary,
      date: date,
      visit: visit,
      train: train,
      roleId: roleid,
    };

    console.log(data);
    // CRUDKUB("customers", "update", data, id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to edit ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`http://rhome19.thddns.net:5526/api/hrs/edit/${id}`, data)
          .then((res) => {
            Swal.fire("Update!", "Your file has been Updated.", "success");
            window.location.assign("../");
            console.log(res);
            if (res.status === 500) {
              Swal.fire("Error!", "Error for you Update", "error");
            }
          });
        // window.location.assign("../");
      }
    });

    // axios
    //   .put(`http://rhome19.thddns.net:5526/api/customers/edit/${id}`, data)
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status === 500) {
    //       window.location.assign("/");
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
    <Container maxWidth="xs">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h1" style={{ fontSize: "32px" }}>
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
                value={name}
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
                value={password}
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                value={address}
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="contact"
                value={contact}
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
                value={email}
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
                value={education}
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
                value={policy}
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
                value={salary}
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
                value={date}
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
                value={visit}
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
                value={train}
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
                fullWidth
                id="policy"
                value={roleid}
                label="Role Id "
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
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default UpdateHrs;
