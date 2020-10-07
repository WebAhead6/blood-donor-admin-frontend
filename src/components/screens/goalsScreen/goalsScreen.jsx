import React from 'react'
import "./goalsScreen.css"
import GolBar from "../../general/goalsBar";
import Drop from "../../general/bloodDropImage";

import { newCurrentAtom, newGoalAtom } from "../../../recoilsState/newGoal";
import { useRecoilState } from "recoil";

function GoalsScreen() {
  //  scale, text, percentage 
  const [current, setCurrent] = useRecoilState(newCurrentAtom);
  const [goal, setGoal] = useRecoilState(newGoalAtom);

  const percentage = Math.round(current/ goal *100)
    return (
        <div className="golScreen">
            <GolBar />
            <Drop scale="1" text={`${percentage}%`} percentage={percentage} />
        </div>
    )
}

export default GoalsScreen




