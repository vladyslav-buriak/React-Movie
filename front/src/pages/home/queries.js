import { gql } from "@apollo/client";

export const GetMovies = gql`
  query ($currentPage: Int, $lang: String, $filterParam: MoviesFilter) {
    moviesDate(
      currentPage: $currentPage
      lang: $lang
      filterParam: $filterParam
    ) {
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
