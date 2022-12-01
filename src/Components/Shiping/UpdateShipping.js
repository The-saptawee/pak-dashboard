import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { CRUDKUB } from "../Api/CRUD";
import axios from "axios";
import Swal from "sweetalert2";

export default function UserUpdate() {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://rhome19.thddns.net:5526/api/shipping/${id}`)
      .then((res) => {
        console.log(res.data);
        setTransport(res.data.transport);
        setArrived(res.data.arrived);
        setOrder_id(res.data.order_id);
        setHr_id(res.data.hrId);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      transport: transport,
      arrived: arrived,
      order_id: order_id,
      hrId: hr_id,
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
          .put(`http://rhome19.thddns.net:5526/api/shipping/edit/${id}`, data)
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

  const [transport, setTransport] = useState("");
  const [arrived, setArrived] = useState("");
  const [order_id, setOrder_id] = useState("");
  const [hr_id, setHr_id] = useState("");

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
          Shiping
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
                variant="outlined"
                required
                fullWidth
                type="date"
                id="Transport"
                label="Transport"
                InputLabelProps={{
                  shrink: true,
                }}
                value={transport}
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
                value={arrived}
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
                value={order_id}
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
                value={hr_id}
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
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
