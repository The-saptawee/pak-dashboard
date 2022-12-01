import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { CRUDKUB } from "../Api/CRUD";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateOrders = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://rhome19.thddns.net:5526/api/order/${id}`).then((res) => {
      //   console.log(res.data);
      setCustomers_id(res.data.customerId);
      setOrder_detials_id(res.data.orderDetailId);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      customerId: customers_id,
      orderDetailId: order_ditials_id,
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
          .put(`http://rhome19.thddns.net:5526/api/order/edit/${id}`, data)
          .then((res) => {
            try {
              Swal.fire("Update!", "Your file has been Updated.", "success");
              window.location.assign("../");
              console.log(res);
            } catch (error) {
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

  const [customers_id, setCustomers_id] = useState("");
  const [order_ditials_id, setOrder_detials_id] = useState("");

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
          Update Orders
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
                value={customers_id}
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
                value={order_ditials_id}
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
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default UpdateOrders;
