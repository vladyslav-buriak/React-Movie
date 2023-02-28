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

export type localesAction = {
  type: string;
  locale: string;
};

export type localesState = {
  locale: string;
};

export type childType = {
  children: JSX.Element;
};

export type contextType = {
  state: localesState;
  dispatch: ({ type, locale }: { type: string; locale: string }) => void;
};


export type FilterType ={
  sortBy: string;
  sortType: string;
}
