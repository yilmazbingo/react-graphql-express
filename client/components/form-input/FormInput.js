import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <section className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {/* //whenever user typed in anything we will have shrink class */}
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : " "
        } form-input-label`}
      >
        {label}{" "}
      </label>
    ) : null}
  </section>
);

export default FormInput;
