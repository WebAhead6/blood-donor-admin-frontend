import backEndApiCall from "./backEndApiCall";
export const addItem = async (entryTextArray) => {
  return await backEndApiCall("POST", "/homeMenu", {
    redirectionLink:entryTextArray.redirectionLink,
    src:entryTextArray.src,
   
    title: {
      he: entryTextArray[0].title,
      ar: entryTextArray[1].title,
      en: entryTextArray[2].title,
    },
  });
};
export const getMenuItemsData = async () => {
  const { data } = await backEndApiCall("GET", "/api/homeMenu");//FIXME: route
  return data.map(({src, redirectionLink ,id, title}) => ({
    id,
    redirectionLink,
    src,
    textArray: [
            {
        language: "Hebrew",
        title: title.he,
      },
      {
        language: "Arabic",
        title: title.ar,
      },
      {
        language: "English",
        title: title.en,
      },
    ],
  }));
};
