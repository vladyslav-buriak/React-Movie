import { gql } from "@apollo/client";

export const GetRecommendMovies = gql`
  query ($id: [Int]) {
    movieById(id: $id) {
      id
      title
      popularity
      releaseDate
      overview
      posterPath
    }
  }
`;
