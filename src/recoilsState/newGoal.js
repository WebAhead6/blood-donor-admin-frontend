import { atom } from "recoil";

export const newGoalAtom = atom({
  key: "Goal",
  default: {
    goal: 0,
  }
});

export const newCurrentAtom = atom({
  key: "current",
  default: {
    current: 0
   
  }
});

