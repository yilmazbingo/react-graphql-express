import React from "react";
import { graphql } from "react-apollo";
import fetchSingleSong from "../../Graphql/queries/fetchSingleSong";
import CreateLyrics from "../../components/create-lyrics/CreateLyrics";
import LyricList from "../../components/lyric-list/LyricList";
import Spinner from "../../components/spinner/spinner";
import BaseLayout from "../../components/base-layout/BaseLayout";

const SongDetail = (props) => {
  const { song } = props.data;
  console.log(props);

  return (
    <BaseLayout className="song-detail-page">
      {song ? (
        <div>
          <LyricList lyrics={song.lyrics} title={song.title} />
          <CreateLyrics songId={props.match.params.id} />
        </div>
      ) : (
        <Spinner />
      )}
    </BaseLayout>
  );
};

//this query is executed automatically for us but mutations are manually called by us
//props frist go into the graphql and then it passes it to the component
export default graphql(fetchSingleSong, {
  options: (props) => {
    return { variables: { id: props.match.params.id } };
  },
})(SongDetail);

//component is renderd while the query is running
//after query is resolved component rerenders again

//apollo store has internal buckets of data. it fetches and store the data inside those buckets.
// it knows which bucket to store in specifically because every response that it gets back from the server adds a new field on the response
// this field says what type of data was just fetched.
// apollo does not know anything about data that stored inside the buckets.
// apollo does know fetched data is related to the data that rendered on the screen. so it does not automatically refresh the view.
//
