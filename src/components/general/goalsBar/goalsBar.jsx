import React from "react";
import "./goalsBar.css";
import { newCurrentAtom, newGoalAtom } from "../../../recoilsState/newGoal";
import { useRecoilState } from "recoil";

const GoalsBar = function () {
  const [current, setCurrent] = useRecoilState(newCurrentAtom);
  const [goal, setGoal] = useRecoilState(newGoalAtom);

  const onCurrentChange = (value) => {
    setCurrent(value);
  };

  const onGoalChange = (value) => {
    setGoal(value);
  };

  // {
  //   data: {
  //   current: 3,
  //   goal: 7
  //   },
  //   code: 200,
  //   ok: true
  //   }





  const handleSaveClick = () => {
    //backEndApiCall("/api/goals")
     
    
  }

  return (
    <div className="goals_form_container">
      <div class="goals_form_title">
        <span>Goal</span>
      </div>
      <div class="goals_form">
        <form>
          <label for="Current">
            Current
            <input
              type="number"
              name="current"
              value={current.current}
              min="0"
              id="current"
              onChange={(e) => onCurrentChange(e.target.value)}
            />
          </label>
          <label for="Current">
            Yearly Goal
            <input
              type="number"
              name="goal"
              value={goal.goal}
              min="0"
              id="goal"
              onChange={(e) => onGoalChange(e.target.value)}
            />
          </label>
          <button type="submit" class="goals_form_saveButton" onClick={handleSaveClick}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoalsBar;
