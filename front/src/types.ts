export interface IMovieProps {
  id: string;
  title: string;
  releaseDate: string;
  posterPath: string;
  popularity: string;
  overview: string;
}

export interface IModal {
  open: boolean;
  title: string;
  setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  link: string;
}
