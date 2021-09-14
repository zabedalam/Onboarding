import React, { Fragment } from "react";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <Fragment>
      <input type={type} name={name} checked={checked} onChange={onChange} />
    </Fragment>
  );
};

export default Checkbox;
