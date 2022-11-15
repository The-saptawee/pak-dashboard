import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Container,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ButtonGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { CRUDKUB } from "../Api/CRUD";
import Swal from "sweetalert2";

export default function UserList() {
  const [hr, setHr] = useState([]);

  useEffect(() => {
    UsersGetALL();
  }, []);

  const UsersGet = () => {
    fetch("http://rhome19.thddns.net:5526/api/hrs/")
      .then((res) => res.json())
      .then((result) => {
        setHr(result);
      });
  };

  const UsersGetALL = async () => {
    var a = await CRUDKUB("hrs", "get", "", "");
    console.log(a);
    setHr(a);
  };

  const UsersGetSig = (id) => {
    CRUDKUB("customers", "get", "", id);
  };

  const UpdateUser = (id) => {
    window.location = "/hrs/update/" + id;
  };

  const UserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://rhome19.thddns.net:5526/api/hrs/delete/${id}`)
          .then((res) => {
            console.log(res);
            window.location = "/hrs";
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

    // axios
    //   .delete(`http://rhome19.thddns.net:5526/api/customers/delete/${id}`)
    //   .then((res) => {
    //     console.log(res);
    //   });

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "success",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     CRUDKUB("customers", "delete", "", id);
    //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //   }
    // });
  };

  return (
    <div style={{ flexGrow: "1" }}>
      <Container style={{ marginTop: "50px", padding: "20px" }} maxWidth="lg">
        <Paper style={{ padding: "10px" }}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Employee
              </Typography>
            </Box>
            <Box style={{ marginLeft: "180" }}>
              <Link
                to="/hrs/create"
                style={{ textDecoration: "none", padding: "40px" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "10px" }}
                >
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "#66FF99" }}>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    ID
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Name
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Address
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Contect
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    E-mail
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Education
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Salary
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Role
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hr.map((hr) => (
                  <TableRow key={hr.id}>
                    <TableCell align="right">{hr.id}</TableCell>
                    <TableCell align="right">{hr.name}</TableCell>
                    <TableCell align="right">{hr.address}</TableCell>
                    <TableCell align="right">{hr.contact}</TableCell>
                    <TableCell align="right">{hr.email}</TableCell>
                    <TableCell align="right">{hr.education}</TableCell>
                    <TableCell align="right">{hr.salary}</TableCell>
                    <TableCell align="right">{hr.role.name}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                      >
                        <Button onClick={() => UpdateUser(hr.id)}>Edit</Button>
                        <Button onClick={() => UserDelete(hr.id)}>
                          Delete
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}
