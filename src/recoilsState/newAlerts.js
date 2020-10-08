import { atom } from "recoil";

export const newAlertData = atom({
  key: "TextAlerts",
  default: {
    bloodType: [],
    textArray: [
      {
        language: "Hebrew",
        context: "",
        title: "",
      },
      {
        language: "Arabic",
        context: "",
        title: "",
      },
      {
        language: "English",
        context: "",
        title: "",
      },
    ],
  },
});

// export const newAlertBloodTypeAtom = atom({
//   key: "BloodTypeAlerts",
//   default: [
//     {
//       indeterminate: true,
//       checkAll: false,
//       value: [],
//     },
//   ],
// });

export const getApiAlertsAtom = atom({
  key: "newAlert",
  default: [],
});
