import { atom } from "recoil";

export const newAlertTextAtom = atom({
  key: "TextAlerts",
  default: [
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
});

export const newAlertBloodTypeAtom = atom({
  key: "BloodTypeAlerts",
  default: [
    {
      indeterminate: true,
      checkAll: false,
      value: [],
    },
  ],
});

export const getNewAlertsAtom = atom({
  key: "newAlert",
  default: [{ addAlert: "" }],
});
