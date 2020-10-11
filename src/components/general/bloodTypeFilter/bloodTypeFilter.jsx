import React from "react";
import "./bloodTypeFilter.css";
import { Checkbox, CheckboxGroup } from "rsuite";

function BloodTypeFilter({ valueArray = [], onChange }) {
  const options = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleCheckAll = (value) => {
    if (value.length) onChange(options);
    else onChange([]);
  };
  const handleChange = (value = []) => {
    onChange(value);
  };
  console.log(options.length === valueArray.length);
  return (
    <div className="bloodTypeFilter">
      <fieldset>
        <legend>blood type filter</legend>
        <CheckboxGroup
          value={options.length === valueArray.length ? ["all"] : []}
          onChange={handleCheckAll}
        >
          {[
            <Checkbox key="all" value="all">
              Check all
            </Checkbox>,
          ]}
        </CheckboxGroup>

        <CheckboxGroup
          className="bloodTypeFilter-checkBox"
          inline
          name="checkboxList"
          value={valueArray}
          onChange={handleChange}
        >
          {options.map((option) => (
            <Checkbox key={option} value={option}>
              {option}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </fieldset>
    </div>
  );
}

export default BloodTypeFilter;
