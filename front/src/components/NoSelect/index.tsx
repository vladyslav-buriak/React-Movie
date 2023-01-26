import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const NoSelectWrapp = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));
export const NoSelect = () => {
  return (
    <NoSelectWrapp>
      <Box
        component="img"
        sx={{
          width: "50%",
          opacity: ".6",
        }}
        alt="No images."
        src="no.png"
      ></Box>
      <Typography variant="h5" mt={2}>
        No selected movies
      </Typography>
    </NoSelectWrapp>
  );
};
