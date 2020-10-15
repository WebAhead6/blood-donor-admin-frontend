import { atom } from "recoil";

export const newSettingAtom = atom({
  key: "Setting",
  default: {
    context: "",
    contextType: "url",
    textArray: [
      {
        language: "Hebrew",
        title: "",
      },
      {
        language: "Arabic",
        title: "",
      },
      {
        language: "English",
        title: "",
      },
    ],
  },
});
