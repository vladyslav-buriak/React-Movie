import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material/";
import { Paper } from "@mui/material/";
import { Grid } from "@mui/material/";
import { MovieCard } from "../../components";
export const Home: FC = () => {
  
  let movies: { title: string; releaseDate: string ,image:string }[] = [
    {
      title: "Vova",
      releaseDate: "255555",
      image:"https://www.themoviedb.org/t/p/w220_and_h330_face/1tntyDRcev7PIg6xfo8El56ocoi.jpg",
    },
 
  ];
  const SelectedSection = styled(Paper)(({ theme }) => ({
    height: "calc(100vh - 200px)",
    position: "sticky",
    top: "1.5rem",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  return (
    <Box mt={6}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Paper>Filter</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Grid sx={{ padding: "1rem" }} container spacing={2}>
              <Grid item xs={12} sm={4} md={3}>
                <MovieCard movies={movies} />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <MovieCard movies={movies} />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <MovieCard movies={movies} />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <MovieCard movies={movies} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedSection>Selected Movie</SelectedSection>
        </Grid>
      </Grid>
    </Box>
  );
};
