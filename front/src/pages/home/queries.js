import { gql } from "@apollo/client";

export const GetMovies = gql`
  query($currentPage:Int) {
    moviesDate(currentPage:$currentPage) {
      page
      totalResults
      totalPages
      results {
        title
        id
        overview
        posterPath
        releaseDate
        popularity
      }
    }
  }
`;
