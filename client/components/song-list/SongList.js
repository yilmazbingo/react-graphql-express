import React from "react";
import { graphql } from "react-apollo";
import query from "../../Graphql/queries/fetchSongs";
import mutationDeleteSong from "../../Graphql/mutations/deleteSong";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcEmptyTrash } from "react-icons/fc";
import { Link } from "react-router-dom";

import Spinner from "../spinner/spinner";
import "./song-list.style.scss";

//.refetch() will automatically execute any queries that are associated with this component
const SongList = (props) => {
  //this queiry is associated with the SongList. thats why we use refetch()
  //we could refetch queries as in SongCreate as well
  //this will update the data on the server
  const onSongDelete = (id) => {
    props.mutate({ variables: { id } }).then(() => props.data.refetch());
  };

  const renderSongs = () => {
    return props.data.songs.map(({ id, title }, index) => {
      return (
        <tr key={id}>
          <td> {index + 1} </td>
          <td>
            <Link to={`/songs/${id}`}> {title}</Link>
          </td>
          <td>
            <FcEmptyTrash
              className="delete-icon"
              onClick={() => onSongDelete(id)}
            />
          </td>
        </tr>
      );
    });
  };
  return (
    <React.Fragment>
      {props.data.loading ? (
        <Spinner />
      ) : (
        <table className="table">
          <caption className="caption">List Of Songs</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Song Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{renderSongs()}</tbody>
        </table>
      )}
    </React.Fragment>
  );
};

//When we first render our component to the screen the query that we wrote will be automatically sent to our back end server.
//Fetching some data from the server is an async process. When the component gets rendered, it will show up on the screen temporarily without any data.
//When the query is complete the component will be automatically re-rendered with the data was fetched from the query.
//The data returned from the query is placed inside of our components props object.
export default graphql(mutationDeleteSong)(graphql(query)(SongList));

//graphql() is not set up to take multiple queries or multiple mutations
//strictly one query,one mutation at a time.
