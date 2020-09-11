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
        //when we r pushed to "/" to show the list it will refetch from db to update the list
        //apollo does not know that new created song is the part of that list.
        refetchQueries: [{ query }],
      })
      .then(() => this.props.history.push("/"));
      // we are navigating right after we get the result
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
              <Button className="add-song">Create Your Song</Button>
            </form>
          )}
        </Mutation>
      </BaseLayout>
    );
  }
}

const mutation = gql`
# AddSong is the name of the mutation. we can reach this from outside. this is for client side usage. when we call this, it will invoke the addSong(). this AddSong can be named anything else. 
# if we had 2 mutations, when we pass variables from the component, we would use:"props.mutate.AddSong"
# "$title" is pass from props.mutate({variables:{}})
# on the server, we call addSong
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

//we have access to props.mutate() which will run the mutation that we passed. one mutation at a time.
export default graphql(mutation)(SongCreate);
