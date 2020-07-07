import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import "./header.style.scss";

const Header = () => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4500/graphql"
      : "https://react-webpack-graphql.herokuapp.com/graphql";

  return (
    <header className="header">
      <Link to="/">
        <img className="img" src="/images/graphql.jpeg" alt="graphql-icon" />
      </Link>

      <a href={url}>
        <h4>GraphQL-Server</h4>
      </a>
      <a
        href="https://github.com/yilmazbingo/react-graphql-express"
        target="_blank"
      >
        <AiOutlineGithub className="github-icon" />
      </a>
    </header>
  );
};

export default Header;
