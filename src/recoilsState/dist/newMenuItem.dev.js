"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuItemAtom = exports.newMenuItemAtom = void 0;

var _recoil = require("recoil");

var newMenuItemAtom = (0, _recoil.atom)({
  key: "MenuItem",
  default: {
    src: "",
    redirectionLink: "",
    textArray: [{
      language: "Hebrew",
      title: ""
    }, {
      language: "Arabic",
      title: ""
    }, {
      language: "English",
      title: ""
    }]
  }
});
exports.newMenuItemAtom = newMenuItemAtom;
var getMenuItemAtom = (0, _recoil.atom)({
  key: "NewItem",
  default: []
});
exports.getMenuItemAtom = getMenuItemAtom;