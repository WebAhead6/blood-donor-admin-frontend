import { atom } from "recoil";

export const newMenuItemAtom = atom({
  
  key: "MenuItem",
  default: {
    src:"",
    redirectionLink:"",
    textArray:
  [
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
  ]
}
});



export const getMenuItemAtom = atom({
  key: "newAlert",
  default: [],
});


