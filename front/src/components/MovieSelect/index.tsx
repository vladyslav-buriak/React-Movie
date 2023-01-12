import * as React from "react";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMenu } from "../CardMenu";
import { MenuItem } from "@mui/material";

export const MovieSelect = ({ movies }: any) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={movies.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {movies.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movies.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{ pl: 2, mt: 4 }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movies.genres[0].name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movies.popularity}
          </Typography>
        </Box>
      </Box>
      <CardMenu>
        <MenuItem
          onClick={() => {
            alert("flim removed");
          }}
        >
          remove film
        </MenuItem>
      </CardMenu>
    </Card>
  );
};
