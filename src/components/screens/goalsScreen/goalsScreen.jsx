import React from 'react'
import "./goalsScreen.css"
import GolBar from "../../general/goalsBar";
import Drop from "../../general/bloodDropImage";


function GoalsScreen() {
  //  scale, text, percentage 

    return (
        <div className="golScreen">
            <GolBar />
            <Drop scale="1" text="" percentage="50" />
        </div>
    )
}

export default GoalsScreen




