import { atom } from "recoil";

export const newGoalAtom = atom({
  key: "Goal",
  default: 0
});

export const newCurrentAtom = atom({
  key: "current",
  default: 0
});

