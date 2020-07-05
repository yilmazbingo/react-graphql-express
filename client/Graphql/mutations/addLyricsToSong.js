const gql = require("graphql-tag");

// fetchSingleSong returns likes so when we mutate we have to return likes too, otherwise ui will not update
export default gql`
  mutation AddLyricsToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
        id
        likes
      }
    }
  }
`;
