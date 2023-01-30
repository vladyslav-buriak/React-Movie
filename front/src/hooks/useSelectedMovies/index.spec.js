import { renderHook, act } from "@testing-library/react-hooks";
import { useSelectedMovies } from ".";

test("should be length", () => {
  const film = {
    id: "1",
    title: "titanic",
  };
  const { result } = renderHook(() => useSelectedMovies());
  act(() => {
    result.current.addMovie(film);
  });

  expect(result.current.selectedMovie.length).toBe(1);
});

test("should be delete film", () => {
  const film = {
    id: "1",
    title: "titanic",
  };
  const { result } = renderHook(() => useSelectedMovies());
  act(() => {
    result.current.removeMovie(film);
  });

  expect(result.current.selectedMovie.length).toBe(0);
});

test("max length 6 movies", () => {
  const film = {
    id: "1",
    title: "titanic",
  };
  const { result } = renderHook(() => useSelectedMovies());

  for (let i = 1; i <= 6; i++) {
    act(() => {
      result.current.addMovie({
        ...film,
        id: i,
      });
    });
  }

  expect(result.current.selectedMovie.length).toBe(6);
});
