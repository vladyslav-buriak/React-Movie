import { useState } from "react";
import { IMovieProps } from "../../types";
import { useCallback } from "react";
import { SELECTED_LENGTH } from "../../config";

export const useSelectedMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovieProps[]>([]);

  const addMovie = useCallback(
    (arg: IMovieProps) => {
      const find = selectedMovie.find((movie) => {
        return movie.id === arg.id;
      });

      const movieLength = selectedMovie.length <= SELECTED_LENGTH;
      if (!find && movieLength) {
        setSelectedMovie([arg, ...selectedMovie]);
      }
    },
    [selectedMovie]
  );

  const removeMovie = useCallback(
    (arg: string) => {
      setSelectedMovie([...selectedMovie.filter((movie) => movie.id !== arg)]);
    },
    [selectedMovie]
  );

  return {
    selectedMovie,
    addMovie,
    removeMovie,
  };
};
