import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { CRUDKUB } from "../Api/CRUD";

export default function CreateOrders() {
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      customerId: customers_id,
      orderDetailId: order_ditials_id,
    };

    CRUDKUB("order", "create", data);
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

  const [customers_id, setCustomers_id] = useState("");
  const [order_ditials_id, setOrder_detials_id] = useState("");

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
          Create Orders
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
                autoComplete="customers_id"
                name="customers_id"
                variant="outlined"
                required
                fullWidth
                id="customers_id"
                label="Customers - id"
                onChange={(e) => setCustomers_id(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="order_detials_id"
                label="Order Detials Id"
                onChange={(e) => setOrder_detials_id(e.target.value)}
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
