import { FC } from "react";
import * as React from "react";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMenu } from "../../components/";
import { Box } from "@mui/material";
import { MenuItem } from "@mui/material";
import { IMovieProps } from "../../types";


interface ICardProps {
  movie: IMovieProps;
  addMovie: (arg: IMovieProps) => void;
}
export const MovieCard: FC<ICardProps> = ({ addMovie, movie }) => {

  return (
    <Card sx={{ maxWidth: 300, height: 300, position: "relative" }}>
      <Box>
        <CardMenu>
          <MenuItem onClick={() => addMovie(movie)}>add film</MenuItem>
        </CardMenu>
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          height="220"
          image={movie.posterPath}
          alt={movie.posterPath}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: "1rem", color: "grey" }}
            variant="h5"
            component="h3"
          >
            {movie?.title}
          </Typography>
          <Typography
            sx={{ fontSize: "0.75rem", color: "grey" }}
            variant="subtitle1"
            component="h5"
          >
            {movie?.releaseDate}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
