import { gql } from "@apollo/client";

export const GetMovies = gql`
  query($currentPage:Int,$lang:String) {
    moviesDate(currentPage:$currentPage,lang:$lang) {
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
