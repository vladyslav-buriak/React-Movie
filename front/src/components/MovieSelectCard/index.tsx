import * as React from "react";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMenu } from "../CardMenu";
import { MenuItem } from "@mui/material";
import { IMovieProps } from "../../types";

interface ISelectProps {
  selected: IMovieProps;
  removeMovie: (arg: string) => void;
}
export const MovieSelectCard: React.FC<ISelectProps> = ({
  selected,
  removeMovie,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        height: 250,
        margin: "0.5rem 0",
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          objectFit: "cover",
          width: "50%",
        }}
        image={selected.posterPath}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "45%" }}>
        <CardContent sx={{ padding: "0 1rem" }}>
          <Typography
            sx={{ fontSize: "1rem", color: "grey", fontWeight: "bold" }}
            component="div"
            variant="h5"
          >
            {selected.title}
          </Typography>
          <Typography
            sx={{ fontSize: "0.75rem", color: "grey" }}
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {selected.releaseDate}
          </Typography>
        </CardContent>
      </Box>
      <CardMenu>
        <MenuItem
          onClick={() => {
            removeMovie(selected.id);
          }}
        >
          remove film
        </MenuItem>
      </CardMenu>
    </Card>
  );
};
