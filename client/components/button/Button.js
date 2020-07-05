import React from "react";
import "./button.style.scss";

const Button = (props) => {
  const { className } = props;
  return <button className={className}> {props.children}</button>;
};

export default Button;
