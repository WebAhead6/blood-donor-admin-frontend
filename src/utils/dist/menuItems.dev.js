"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editItem = exports.deleteItem = exports.getMenuItemsData = exports.addItem = void 0;

var _backEndApiCall = _interopRequireDefault(require("./backEndApiCall"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addItem = function addItem(dataa) {
  return regeneratorRuntime.async(function addItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _backEndApiCall.default)("POST", "/homeMenu", {
            redirectionLink: dataa.redirectionLink
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.addItem = addItem;

var getMenuItemsData = function getMenuItemsData() {
  var _ref, data;

  return regeneratorRuntime.async(function getMenuItemsData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _backEndApiCall.default)("GET", "/api/homeMenu"));

        case 2:
          _ref = _context2.sent;
          data = _ref.data;
          return _context2.abrupt("return", data.map(function (_ref2) {
            var src = _ref2.src,
                redirectionLink = _ref2.redirectionLink,
                id = _ref2.id;
            return {
              id: id,
              redirectionLink: redirectionLink,
              src: src
            };
          }));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getMenuItemsData = getMenuItemsData;

var deleteItem = function deleteItem(ItemId) {
  return regeneratorRuntime.async(function deleteItem$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _backEndApiCall.default)("POST", "/homeMenu/delete/".concat(ItemId)));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.deleteItem = deleteItem;

var editItem = function editItem(ItemId, newValue) {
  return regeneratorRuntime.async(function editItem$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log(ItemId, newValue);
          _context4.next = 3;
          return regeneratorRuntime.awrap((0, _backEndApiCall.default)("POST", "/homeMenu/" + ItemId, {
            redirectionLink: newValue.redirectionLink
          }));

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}; // title: {
//   he: entryTextArray[0].title,
//   ar: entryTextArray[1].title,
//   en: entryTextArray[2].title,
// },
// export const getMenuItemsData = async () => {
//   const { data } = await backEndApiCall("GET", "/api/homeMenu");
//   return data.map(({src, redirectionLink ,id, title}) => ({
//     id,
//     redirectionLink,
//     src,
//     textArray: [
//             {
//         language: "Hebrew",
//         title: title.he,
//       },
//       {
//         language: "Arabic",
//         title: title.ar,
//       },
//       {
//         language: "English",
//         title: title.en,
//       },
//     ],
//   }));
// };


exports.editItem = editItem;