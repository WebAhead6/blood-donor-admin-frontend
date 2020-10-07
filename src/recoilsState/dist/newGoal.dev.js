"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newCurrentAtom = exports.newGoalAtom = void 0;

var _recoil = require("recoil");

var newGoalAtom = (0, _recoil.atom)({
  key: "Goal",
  default: {
    goal: 0
  }
});
exports.newGoalAtom = newGoalAtom;
var newCurrentAtom = (0, _recoil.atom)({
  key: "current",
  default: {
    current: 0
  }
});
exports.newCurrentAtom = newCurrentAtom;