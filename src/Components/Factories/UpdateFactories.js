import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { CRUDKUB } from "../Api/CRUD";
import axios from "axios";
import Swal from "sweetalert2";

export default function UpdateFactories() {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://rhome19.thddns.net:5526/api/factories/${id}`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setPit(res.data.pit);
        setRow(res.data.row);
        setLeg(res.data.leg);
        setType(res.data.typepakId);
        setTimeplant(res.data.timeplant);
        setFinishplant(res.data.finishplant);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: name,
      pit: pit,
      row: row,
      leg: leg,
      typepakId: type,
      timeplant: timeplant,
      finishplant: finishplant,
    };
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
          .put(`http://rhome19.thddns.net:5526/api/factories/edit/${id}`, data)
          .then((res) => {
            Swal.fire("Update!", "Your file has been Updated.", "success");

            window.location.assign("../");
            // console.log(res);
            if (res.status === 500) {
              Swal.fire("Error!", "Error for you Update", "error");
            }
          });
        // window.location.assign("/user");
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
  const [pit, setPit] = useState("");
  const [row, setRow] = useState("");
  const [leg, setLeg] = useState("");
  const [type, setType] = useState("");
  const [timeplant, setTimeplant] = useState("");
  const [finishplant, setFinishplant] = useState("");

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
          Factories
        </Typography>
        <form
          style={{
            width: "100%", // Fix IE 11 issue.
            marginTop: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pit"
                label="Pit Number Only"
                type="number"
                value={pit}
                onChange={(e) => setPit(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="row"
                label="Row Number Only"
                type="number"
                value={row}
                onChange={(e) => setRow(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="leg"
                label="Leg Number Only"
                type="number"
                value={leg}
                onChange={(e) => setLeg(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="type"
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="timeplant"
                label="Time - Plant"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={timeplant}
                onChange={(e) => setTimeplant(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="finishplant"
                label="Finish - Plant"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={finishplant}
                onChange={(e) => setFinishplant(e.target.value)}
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
