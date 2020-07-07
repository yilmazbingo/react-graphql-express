import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import "./header.style.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="img" src="/images/graphql.jpeg" alt="graphql-icon" />
      </Link>

      <a href="http://localhost:4500/graphql">
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
