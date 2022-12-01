// import LoadingScreen from "react-loading-screen";
import { Skeleton, CircularProgress, Box } from "@mui/material";
import { Container } from "@mui/system";

const Logout = () => {
  localStorage.clear();

  window.location.assign("/");

  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </Container>
    </div>
  );
};

export default Logout;
