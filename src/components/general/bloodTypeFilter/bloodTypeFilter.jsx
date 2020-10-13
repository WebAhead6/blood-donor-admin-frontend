import React from "react";
import "./bloodTypeFilter.css";
import { Checkbox, CheckboxGroup } from "rsuite";

function BloodTypeFilter({
  valueArray = [],
  onChange,
  canEdit,
  member,
  onMemberChange,
}) {
  const options = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleCheckAll = (value) => {
    if (canEdit) {
      if (options.length === valueArray.length) onChange([]);
      else onChange(options);
    }
  };
  const handleChange = (value = []) => {
    if (canEdit) onChange(value);
  };

  const handleMemberChange = (value) => {
    if (canEdit) onMemberChange(!value);
  };

  return (
    <div className="bloodTypeFilter">
      <fieldset>
        <legend>blood type filter</legend>

        <label>
          <input
            type="checkbox"
            checked={member}
            onChange={(e) => handleMemberChange(e.target.value == "true")}
          />
          member
        </label>

        <label>
          <input
            type="checkbox"
            checked={options.length === valueArray.length}
            onChange={(e) => handleCheckAll(e.target.value === "true")}
          />
          Check all
        </label>

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
