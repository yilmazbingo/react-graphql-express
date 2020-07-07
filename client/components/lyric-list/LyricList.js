import React from "react";
import { AiFillLike } from "react-icons/ai";
import { graphql } from "react-apollo";
import likeMutation from "../../Graphql/mutations/like";
import { BsMusicNoteBeamed } from "react-icons/bs";
import "./lyric-list.style.scss";
const LyricList = (props) => {
  const handleLike = (id, likes) => {
    props.mutate({
      variables: { id },
      // we are changing the likes before we get the response
      optimisticResponse: {
        __typename: "Mutation",
        //if likes+3, we will see +3 and then updated to +1
        likeLyric: { id, __typename: "LyricType", likes: likes + 1 },
      },
    });
  };
  const renderLyrics = () => {
    return props.lyrics.map(({ id, content, likes }) => {
      return (
        <tr className="box" key={id}>
          <td className="music-icon">
            <BsMusicNoteBeamed />{" "}
          </td>
          <td className="content">{content} </td>
          <td className="like-icon">
            {" "}
            <AiFillLike onClick={() => handleLike(id, likes)} />{" "}
          </td>
          <td> {likes ? likes : ""}</td>
        </tr>
      );
    });
  };

  return (
    <table className="lyric-list-table">
      <caption> Lyrics of {`${props.title}`} </caption>
      <tbody>{renderLyrics()}</tbody>
    </table>
  );
};

export default graphql(likeMutation)(LyricList);

// <li  className="collection-item">
// {content}
// <div className="vote-box">
//   {/* arg likes will be used for the optimistic update */}
//   <AiFillLike
//     className="like-icon"
//     onClick={() => handleLike(id, likes)}
//   />{" "}
//   {likes ? likes : ""}
// </div>
// </li>

// return <ul className="collection">{renderLyrics()}</ul>;
