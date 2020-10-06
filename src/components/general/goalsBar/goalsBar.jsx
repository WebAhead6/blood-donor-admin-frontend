import React from "react";
import "./goalsBar.css";

const GoalsBar = function () {
  return (
    <div className="goals_form_container">
      <div class="goals_form_title">
        <span>Goal</span>
      </div>
      <div class="goals_form">
        <form>
          <label for="Current">
            Current
            <input type="number" name="current" value="" min="0" id="current" />
          </label>
          <label for="Current">
            Yearly Goal
            <input type="number" name="goal" value="" min="0" id="goal" />
          </label>
          <button type="submit" class="goals_form_saveButton">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoalsBar;
