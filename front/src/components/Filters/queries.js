import { gql } from "@apollo/client";

export const GetGenres = gql`
  query {
    movieByGenres {
      id
      name
    }
  }
`;

