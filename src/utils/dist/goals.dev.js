"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateGoal = exports.getGoal = void 0;

var _backEndApiCall = _interopRequireDefault(require("./backEndApiCall"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//let data = { current, goal }
var getGoal = function getGoal() {
  var _ref, data;

  return regeneratorRuntime.async(function getGoal$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _backEndApiCall.default)("GET", "/api/goals"));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getGoal = getGoal;

var updateGoal = function updateGoal(current, goal) {
  return regeneratorRuntime.async(function updateGoal$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("djkjflasj", goal);
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _backEndApiCall.default)("POST", "/goals", {
            current: current,
            goal: goal
          }));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //   await db.collection('general').doc('yearly_goals').set(data)
//   return 'object updated';
//   const get = async () => {
//     const goalsRef = await db.collection('general').doc('yearly_goals');
//     const doc = await goalsRef.get();
//     if (!doc.exists) {
//         return new Error('No such document!')
//     } else {
//         const data = await doc.data();
//         return data;
//     }
// };
// const schema = Joi.object({
//   current: Joi.number()
//       .integer()
//       .min(0)
//       .max(1000000)
//       .required(),
//   goal: Joi.number()
//       .integer()
//       .min(0)
//       .max(1000000)
//       .required()
// })


exports.updateGoal = updateGoal;