import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { CRUDKUB } from "../Api/CRUD";

export default function CreateFactories() {
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

    CRUDKUB("factories", "create", data);
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
            marginTop: "10px",
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
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
