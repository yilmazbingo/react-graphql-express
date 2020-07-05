import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spinner.styled";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
