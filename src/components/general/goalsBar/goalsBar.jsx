import React,{ useEffect } from "react";
import "./goalsBar.css";
import { newCurrentAtom, newGoalAtom } from "../../../recoilsState/newGoal";
import { useRecoilState } from "recoil";
import { getGoal, updateGoal } from "../../../utils/goals";


const GoalsBar = function () {
  const [current, setCurrent] = useRecoilState(newCurrentAtom);
  const [goal, setGoal] = useRecoilState(newGoalAtom);

  
  useEffect(async () => {
    try {
      const newGoal = await getGoal();
    console.log('hadi',newGoal.goal);
    setCurrent(newGoal.current);
    setGoal(newGoal.goal);


           } catch (e) {
        console.error(e);
    }
}, []);


  const onCurrentChange = (value) => {
    setCurrent(value);
  };

  const onGoalChange = (value) => {
    setGoal(value);
  };

  



  const handleSaveClick = (e) => {
    (async () => {
      e.preventDefault()
      await updateGoal(current ,goal);
      const newGoal = await getGoal();
      console.log(newGoal);
    })();
  };

  return (
    <div className="goals_form_container">
      <div class="goals_form_title">
        <span>Goal</span>
      </div>
      <div class="goals_form">
        <form onSubmit={handleSaveClick}>
          <label for="Current">
            Current
            <input
              type="number"
              name="current"
              value={current}
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
              value={goal}
              min="0"
              id="goal"
              onChange={(e) => onGoalChange(e.target.value)}
            />
          </label>
          <input type="submit" value="Save" className="goals_form_saveButton"  />
            
        </form>
      </div>
    </div>
  );
};

export default GoalsBar;
