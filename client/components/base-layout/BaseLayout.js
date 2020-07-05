import React from "react";
import Header from "../header/Header";
import "./base-layout.style.scss";
const BaseLayout = (props) => {
  const { children, className } = props;
  return (
    <React.Fragment>
      <div>
        <Header></Header>
        <main className={className}>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
