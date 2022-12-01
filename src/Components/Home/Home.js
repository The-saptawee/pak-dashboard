import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TableCell,
  TableRow,
  Container,
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { numberFormat } from "./Format";

const Home = () => {
  useEffect(() => {
    fetch("http://rhome19.thddns.net:5526/api/assets/")
      .then((response) => response.json())
      .then((data) => {
        var data = { data };
        var lastItem = data.data.pop();

        setOnedata(lastItem);
        console.log(onedata);
      });
  }, []);

  const [onedata, setOnedata] = useState("");

  // <TableRow key={onedata.ID}>
  //       <TableCell align="right">{onedata.id}</TableCell>
  //       <TableCell align="right">{onedata.capital}</TableCell>
  //       <TableCell align="right">{onedata.income}</TableCell>
  //       <TableCell align="right">{onedata.expenditure}</TableCell>
  //       <TableCell align="right">{onedata.lucre}</TableCell>
  //       <TableCell align="right">{onedata.down_at_heel}</TableCell>
  //       <TableCell align="right">{onedata.date}</TableCell>
  //       <TableCell align="center"></TableCell>
  //     </TableRow>

  // <Box
  //         flexGrow={1}
  //         sx={{ width: 550, height: 300, backgroundColor: "#91D1BE" }}
  //       >
  //         <Typography
  //           component="h1"
  //           variant="h6"
  //           color="white"
  //           style={{
  //             paddingTop: "50px",
  //             paddingLeft: "40px",
  //             fontSize: "3rem",
  //           }}
  //         >
  //           Total Income
  //         </Typography>
  //         <Typography
  //           component="h1"
  //           variant="h6"
  //           color="white"
  //           style={{
  //             paddingTop: "80px",
  //             paddingLeft: "40px",
  //             fontSize: "2.5rem",
  //           }}
  //         >
  //           {numberFormat(onedata.income)}
  //         </Typography>
  //       </Box>
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={{ paddingTop: "60px" }}>
        <Grid item xs={4} style={{ backgroundColor: "#91D1BE" }}>
          <Typography
            component="h1"
            variant="h6"
            color="white"
            style={{
              paddingTop: "30px",
              paddingLeft: "20px",
              fontSize: "2rem",
            }}
          >
            Total Income
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            color="white"
            style={{
              paddingTop: "50px",
              paddingLeft: "40px",
              fontSize: "1.5rem",
              marginBottom: "50px",
            }}
          >
            {numberFormat(onedata.income)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          style={{ backgroundColor: "#FDC168", marginLeft: "300px" }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="white"
            style={{
              paddingTop: "30px",
              paddingLeft: "20px",
              fontSize: "2rem",
            }}
          >
            Total Expenditure
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            color="white"
            style={{
              paddingTop: "50px",
              paddingLeft: "40px",
              fontSize: "1.5rem",
              marginBottom: "50px",
            }}
          >
            {numberFormat(onedata.expenditure)}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "90px" }}>
        <Grid item xs={4} style={{ backgroundColor: "#768FDF" }}>
          <Typography
            component="h1"
            variant="h6"
            color="white"
            style={{
              paddingTop: "30px",
              paddingLeft: "20px",
              fontSize: "2rem",
            }}
          >
            Total Lucre
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            color="white"
            style={{
              paddingTop: "50px",
              paddingLeft: "40px",
              fontSize: "1.5rem",
              marginBottom: "50px",
            }}
          >
            {numberFormat(onedata.lucre)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          style={{ backgroundColor: "#EC7B7D", marginLeft: "300px" }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="white"
            style={{
              paddingTop: "30px",
              paddingLeft: "20px",
              fontSize: "2rem",
            }}
          >
            Total Down At Heel
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            color="white"
            style={{
              paddingTop: "50px",
              paddingLeft: "40px",
              fontSize: "1.5rem",
              marginBottom: "50px",
            }}
          >
            {numberFormat(onedata.down_at_heel)}
          </Typography>
        </Grid>
      </Grid>
      {/* <Button
        variant="contained"
        size="large"
        style={{ marginLeft: "885px", marginTop: "100px" }}
      >
        Add New Assets
      </Button> */}
    </Container>
  );
};

export default Home;
