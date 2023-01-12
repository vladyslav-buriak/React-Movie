import { FC } from "react";
import * as React from "react";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMenu } from "../../components/";
import { Box } from "@mui/material";
import { MenuItem } from "@mui/material";

interface IMovieProps {
  title: string;
  releaseDate: string;
  image: string;
}

interface IMoviesProps {
  movies: IMovieProps[];
}
export const MovieCard = ({ movies }: IMoviesProps) => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      {movies.map(({ title, releaseDate, image }: IMovieProps) => {
        return (
          <Box key={title}>
            <CardMenu>
              <MenuItem
                onClick={() => {
                  alert("flim added");
                }}
              >
                add film
              </MenuItem>
            </CardMenu>
            <CardMedia
              component="img"
              height="194"
              image={image}
              alt={"hello"}
            />
            <CardContent>
              <Typography variant="h5" component="h3">
                {title}
              </Typography>
              <Typography variant="subtitle1" component="h5">
                {releaseDate}
              </Typography>
            </CardContent>
          </Box>
        );
      })}
    </Card>
  );
};
