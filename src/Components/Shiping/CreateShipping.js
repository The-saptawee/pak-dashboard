import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { CRUDKUB } from "../Api/CRUD";

export default function UserCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      transport: transport,
      arrived: arrived,
      order_id: order_id,
      hrId: hr_id,
    };

    CRUDKUB("shipping", "create", data);
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

  const [transport, setTransport] = useState("");
  const [arrived, setArrived] = useState("");
  const [order_id, setOrder_id] = useState("");
  const [hr_id, setHr_id] = useState("");

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
          Shiping
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
                variant="outlined"
                required
                fullWidth
                type="date"
                id="Transport"
                label="Transport"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setTransport(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="Arrived"
                label="Arrived"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setArrived(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="order_id"
                label="Order Id"
                onChange={(e) => setOrder_id(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="hr_id"
                label="Hr ID"
                onChange={(e) => setHr_id(e.target.value)}
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
