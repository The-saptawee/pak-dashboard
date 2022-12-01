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

export default function Factories() {
  const [factories, setFactories] = useState([]);

  useEffect(() => {
    UsersGetALL();
  }, []);

  //   const UsersGet = () => {
  //     fetch("http://rhome19.thddns.net:5526/api/materials/")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setFactories(result);
  //         console.log(materials);
  //       });
  //   };

  const UsersGetALL = async () => {
    var a = await CRUDKUB("factories", "get", "", "");
    console.log(a);
    setFactories(a);
  };
  // const UsersGetSig = (id) => {
  //   CRUDKUB("customers", "get", "", id);
  // };

  const UpdateUser = (id) => {
    window.location = "/factories/update/" + id;
  };

  const UserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://rhome19.thddns.net:5526/api/factories/delete/${id}`)
          .then((res) => {
            // console.log(res);
            window.location = "/factories";
          });
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
                All Factories
              </Typography>
            </Box>
            <Box style={{ marginLeft: "180" }}>
              <Link
                to="/factories/create"
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
                    Pit
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Row
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Leg
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Type
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Time - Plant
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="right">
                    Finish - Plant
                  </TableCell>
                  <TableCell style={{ fontSize: "20px" }} align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {factories.map((factories) => (
                  <TableRow key={factories.ID}>
                    <TableCell align="right">{factories.id}</TableCell>
                    <TableCell align="right">{factories.name}</TableCell>
                    <TableCell align="right">{factories.pit}</TableCell>
                    <TableCell align="right">{factories.row}</TableCell>
                    <TableCell align="right">{factories.leg}</TableCell>
                    <TableCell align="right">
                      {factories.typepak.name}
                    </TableCell>
                    <TableCell align="right">{factories.timeplant}</TableCell>
                    <TableCell align="right">{factories.finishplant}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                      >
                        <Button onClick={() => UpdateUser(factories.id)}>
                          Edit
                        </Button>
                        <Button onClick={() => UserDelete(factories.id)}>
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
