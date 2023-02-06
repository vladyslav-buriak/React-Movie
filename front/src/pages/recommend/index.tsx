import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { GetRecommendMovies } from "./queries";
import { Grid } from "@mui/material/";
import { MovieCard } from "../../components";
import { useSelectedMovies } from "../../hooks/useSelectedMovies";
import { Paper } from "@mui/material";
import { SkeletonMovies } from "../../components/UI";
import { Typography } from "@mui/material";
import { IMovieProps } from "../../types";

export const Recommend = () => {
  const [searchParams] = useSearchParams();
  const { addMovie } = useSelectedMovies();

  const queryId = searchParams.get("id")?.split(",");
  const id = queryId?.map((i) => Number(i));

  const { loading, error, data } = useQuery(GetRecommendMovies, {
    variables: { id },
  });

  return (
    <>
      <Typography component="h2" variant="h4">
        Recommend
      </Typography>
      <Paper>
        <Grid sx={{ padding: "1rem" }} container columnSpacing={3}>
          {loading ? (
            [...new Array(4)].map((_, i) => {
              return (
                <Grid key={i} item xs={12} sm={4} md={3}>
                  <SkeletonMovies />
                </Grid>
              );
            })
          ) : error ? (
            <h2>Error</h2>
          ) : (
            data.movieById.map((movie: IMovieProps) => {
              return (
                <Grid key={movie.id} item xs={12} sm={4} md={3} mb={3}>
                  <MovieCard movie={movie} addMovie={addMovie} isCardMenu />
                </Grid>
              );
            })
          )}
        </Grid>
      </Paper>
    </>
  );
};
