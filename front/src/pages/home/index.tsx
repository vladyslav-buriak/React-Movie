import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material/";
import { Paper } from "@mui/material/";
import { Grid } from "@mui/material/";
import { MovieCard } from "../../components";
import { GetMovies } from "./queries";
import { useQuery } from "@apollo/client";
import { IMovieProps } from "../../types";
import { PaginationRounded } from "../../components/Pagination";
import { useState } from "react";
import { useSelectedMovies } from "../../hooks/useSelectedMovies";
import { NoSelect } from "../../components";
import { MovieSelectList } from "../../components/MovieSelectList";

const SelectWrapp = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 200px)",
  position: "sticky",
  top: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));

export const Home = () => {
  const { selectedMovie, addMovie, removeMovie } = useSelectedMovies();
  const [currentPage, setcurrentPage] = useState<number>(1);

  const { loading, error, data } = useQuery(GetMovies, {
    variables: { currentPage },
  });
  const handleChange = (e: React.ChangeEvent<unknown> | null, p: number) => {
    setcurrentPage(p);
  };

  return (
    <Box mt={6}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Paper>Filter</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Grid sx={{ padding: "1rem" }} container spacing={2}>
              {loading ? (
                <h2>Loading...</h2>
              ) : error ? (
                <h2>Error</h2>
              ) : (
                data.moviesDate.results.map((movie: IMovieProps) => {
                  return (
                    <Grid key={movie.id} item xs={12} sm={4} md={3}>
                      <MovieCard movie={movie} addMovie={addMovie} />
                    </Grid>
                  );
                })
              )}
            </Grid>
            <PaginationRounded
              pages={data?.moviesDate?.totalPages}
              currentPage={currentPage}
              onPageChange={handleChange}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectWrapp>
            {!selectedMovie.length ? (
              <NoSelect />
            ) : (
              <MovieSelectList
                removeMovie={removeMovie}
                selectedMovie={selectedMovie}
              />
            )}
            <input type="text" />
          </SelectWrapp>
        </Grid>
      </Grid>
    </Box>
  );
};
