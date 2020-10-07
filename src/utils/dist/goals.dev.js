"use strict";

var _backEndApiCall = _interopRequireDefault(require("./backEndApiCall"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getGoal() {
  return regeneratorRuntime.async(function getGoal$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _backEndApiCall.default)());

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}