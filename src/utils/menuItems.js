import backEndApiCall from "./backEndApiCall";

export const addItem = async (redirectionLink, textArray) => {
  return await backEndApiCall("POST", "/homeMenu", {
    redirectionLink: redirectionLink,
    title: {
      he: textArray[0].title,
      ar: textArray[1].title,
      en: textArray[2].title,
    },
  });
};
export const getMenuItemsData = async () => {
  const { data } = await backEndApiCall("GET", "/api/homeMenu");

  return data.map(({ indexOrder, title, redirectionLink, id }) => ({
    indexOrder,
    id,
    redirectionLink,
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
export const deleteItem = async (ItemId) => {
  await backEndApiCall("POST", `/homeMenu/delete/${ItemId}`);
};

export const editItem = async (ItemId, newValue) => {
  console.log(ItemId, newValue);
  await backEndApiCall("POST", "/homeMenu/" + ItemId, {
    redirectionLink: newValue.redirectionLink,
    indexOrder: newValue.indexOrder,
    title: {
      he: newValue.textArray[0].title,
      ar: newValue.textArray[1].title,
      en: newValue.textArray[2].title,
    },
  });
};

export const reorderItem = async (idArray) => {
  await backEndApiCall("POST", "/homeMenu/reorder", {
    idArray,
  });
};
