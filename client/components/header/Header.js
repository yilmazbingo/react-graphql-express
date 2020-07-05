import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="img" src="./graphql.jpeg" alt="" />
      <h4>React-Grapgql</h4>
      <AiOutlineGithub className="github-icon" />
    </div>
  );
};

export default Header;
