import React from "react";
import "./bloodTypeFilter.css";
import { Checkbox, CheckboxGroup } from "rsuite";
import { newAlertBloodTypeAtom } from "../../../recoilsState";
import { useRecoilState } from "recoil";

function BloodTypeFilter() {
  const options = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [checkall, setCheckAll] = useRecoilState(newAlertBloodTypeAtom);
  const handleCheckAll = (value, checked) => {
    const nextValue = checked ? options : [];

    setCheckAll({
      value: nextValue,
      indeterminate: false,
      checkAll: checked,
    });
  };
  const handleChange = (value) => {
    setCheckAll({
      value,
      indeterminate: value.length > 0 && value.length < options.length,
      checkAll: value.length === options.length,
    });
    localStorage.setItem("bloodType", value);
  };

  return (
    <div className="bloodTypeFilter">
      <fieldset>
        <legend>blood type filter</legend>
        <Checkbox
          indeterminate={checkall.indeterminate}
          checked={checkall.checkAll}
          onChange={handleCheckAll}
        >
          Check all
        </Checkbox>

        <CheckboxGroup
          className="bloodTypeFilter-checkBox"
          inline
          name="checkboxList"
          value={checkall.value}
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
