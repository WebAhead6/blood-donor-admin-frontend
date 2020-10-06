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
