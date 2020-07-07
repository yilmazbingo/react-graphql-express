import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import { graphql } from "react-apollo";
import addLyricsToSong from "../../Graphql/mutations/addLyricsToSong";
import Button from "../button/Button";
import "./create-lyric.style.scss";

const LyricCreate = (props) => {
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props
      .mutate({
        variables: { content: content, songId: props.songId },
      })
      .then(() => setContent(""));
  };

  return (
    <form className="lyric-form " onSubmit={handleSubmit}>
      <FormInput
        className="create-lyric-input"
        value={content}
        handleChange={handleChange}
        label="Add a Lyric"
      ></FormInput>
    </form>
  );
};

export default graphql(addLyricsToSong)(LyricCreate);
