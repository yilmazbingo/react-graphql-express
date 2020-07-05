const mongoose = require("mongoose");
const graphql = require("graphql");
//they create their own types, so can be used by all other languages
// JS converts GraphQLID to string type
const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } = graphql;
const Lyric = mongoose.model("lyric");

//resolve(parentValue,args) fetches data
const LyricType = new GraphQLObjectType({
  name: "LyricType",
  // fields are closure functions
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    //relations are established with the ID. this is NORMALIZATION.
    // then we query song with using the lyric id.
    //song object does not hold the lyrics, it justs has the id of lyrics
    song: {
      type: require("./song_type"),
      //parentValue is the Lyric. user first queried Lyric and then query for the song
      //Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).
      resolve(parentValue) {
        console.log("parentValue in Lyric Type", parentValue);
        return Lyric.findById(parentValue)
          .populate("song")
          .then((lyric) => {
            return lyric.song;
          });
      },
    },
  }),
});

module.exports = LyricType;
