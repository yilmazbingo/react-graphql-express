import gql from "graphql-tag";

//queries are not valid inside js
//this is not executing the query, it only defines it.
export default gql`
  {
    songs {
      id
      title
    }
  }
`;
