import { FC } from "react";
import { Stack } from "@mui/material";
import { MovieSelectCard } from "../MovieSelectCard";
import { IMovieProps } from "../../types";

interface ISelectProps {
  selectedMovie: IMovieProps[];
  removeMovie: (arg: string) => void;
}
export const MovieSelectList: FC<ISelectProps> = ({
  removeMovie,
  selectedMovie,
}) => {
  return (
    <Stack
      sx={{
        overflow: "scroll",
        height: "100%",
      }}
    >
      {selectedMovie.map((selected: IMovieProps) => (
        <MovieSelectCard
          removeMovie={removeMovie}
          key={selected.id}
          selected={selected}
        />
      ))}
    </Stack>
  );
};
