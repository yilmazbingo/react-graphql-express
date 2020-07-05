import React from "react";
import gql from "graphql-tag";
import { graphql, Mutation } from "react-apollo";
import { Link } from "react-router-dom";
import query from "../../Graphql/queries/fetchSongs";
import FormInput from "../../components/form-input/FormInput";
import { MdArrowBack } from "react-icons/md";
import BaseLayout from "../../components/base-layout/BaseLayout";
import Button from "../../components/button/Button";
import "./song-create.scss";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const title = e.target.value;
    this.setState(() => ({ title: title }));
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        //when we r pushed to "/" it will refetch
        //query will not attempt twice in "/"
        //this query is not associated with the songCreate component
        refetchQueries: [{ query }],
      })
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <BaseLayout className="create-new-song-page">
        <Link to="/">
          <MdArrowBack className="back-icon" />
        </Link>
        <Mutation mutation={mutation} variables={{ title: this.state.title }}>
          {() => (
            <form action="" onSubmit={this.handleSubmit} className="form">
              <FormInput
                handleChange={this.handleChange}
                value={this.state.title}
                name="title"
                type="text"
                label="Create Song"
              />
              <Button>Create</Button>
            </form>
          )}
        </Mutation>
      </BaseLayout>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

//we have access to props.mutate() which will run the mutation
export default graphql(mutation)(SongCreate);
