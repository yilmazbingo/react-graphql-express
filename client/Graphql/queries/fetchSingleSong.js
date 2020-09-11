import gql from "graphql-tag";

// this is just the definition of the query. We have to execute it separately. { graphql } from "react-apollo" is gonna execute this query. 
export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
