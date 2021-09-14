import React, { Fragment, useState } from "react";
import axios from "axios";
import Checkbox from "./Checkbox";

const Onboarding = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
    console.log("checkedItems: ", checkedItems);
  };

  const checkboxes = [
    {
      name: "Yes",
      key: "checkBox1",
      label: "Securities, participation certificates of domestic companies"
    },
    {
      name: "No",
      key: "checkBox2",
      label: "Securities, participation certificates of domestic companies"
    },
    {
      name: "Yes",
      key: "checkBox3",
      label: "Yes"
    },
    {
      name: "No",
      key: "checkBox4",
      label: "No"
    }
  ];
  return (
    <Fragment>
      <label>Checked item name : {checkedItems["check-box-1"]} </label> <br />
      {checkboxes.map(item => (
        <label key={item.key}>
          {item.label}
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
          />
        </label>
      ))}
    </Fragment>
  );
};

export default Onboarding;
