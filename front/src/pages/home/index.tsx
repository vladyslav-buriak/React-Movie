import { styled } from "@mui/material/styles";
import { Box } from "@mui/material/";
import { Paper } from "@mui/material/";
import { Grid } from "@mui/material/";
import { GetMovies } from "./queries";
import { useQuery } from "@apollo/client";
import { IMovieProps } from "../../types";
import { useState } from "react";
import { useSelectedMovies } from "../../hooks/useSelectedMovies";
import { NoSelect } from "../../components";
import { MovieSelectList } from "../../components/";
import { SkeletonMovies } from "../../components/UI/";
import { PaginationRounded } from "../../components/UI/";
import { MovieForm } from "../../components/MovieForm";
import { MovieCard } from "../../components";
import { ModalWindow } from "../../components";

const SelectWrapp = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: "calc(100vh - 200px)",
  position: "sticky",
  top: "1rem",
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
}));

export const Home = () => {
  const { selectedMovie, addMovie, removeMovie } = useSelectedMovies();
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const { loading, error, data } = useQuery(GetMovies, {
    variables: { currentPage },
  });
  const handleChange = (e: React.ChangeEvent<unknown> | null, p: number) => {
    setcurrentPage(p);
  };

  const getRecommendMovies = ({ moviesList }: any) => {
    let ids = selectedMovie.map((movie: IMovieProps) => movie.id);
    let queryString = `http://localhost:3000/recommend?name=${moviesList}&id=${ids.join()}`;
    setModalTitle(moviesList);
    setLink(queryString);
    setOpen(!!ids.length);
  };

  return (
    <Box mt={6}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Paper>Filter</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Grid sx={{ padding: "1rem" }} container columnSpacing={3}>
              {loading ? (
                [...new Array(8)].map((_, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4} md={3}>
                      <SkeletonMovies />
                    </Grid>
                  );
                })
              ) : error ? (
                <h2>Error</h2>
              ) : (
                data.moviesDate.results.map((movie: IMovieProps) => {
                  return (
                    <Grid key={movie.id} item xs={12} sm={4} md={3} mb={3}>
                      <MovieCard movie={movie} addMovie={addMovie}  />
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
          <ModalWindow
            title={modalTitle}
            open={open}
            link={link}
            setOpen={setOpen}
          />
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
            <MovieForm getRecommendMovies={getRecommendMovies} />
          </SelectWrapp>
        </Grid>
      </Grid>
    </Box>
  );
};
