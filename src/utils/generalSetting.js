import backEndApiCall from "./backEndApiCall";

export const addGeneralSetting = async (
  context,
  contextType,
  entryTextArray
) => {
  return await backEndApiCall("POST", "/genernalSetting", {
    context: context,
    contextType: contextType,
    title: {
      he: entryTextArray[0].title,
      ar: entryTextArray[1].title,
      en: entryTextArray[2].title,
    },
  });
};

export const getGeneralSettingData = async () => {
  const { data } = await backEndApiCall("GET", "/api/genernalSetting");
  console.log(data);
  return data.map(({ id, context, title, contextType, indexOrder }) => ({
    indexOrder,
    id,
    contextType,
    context,
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

export const deleteSetting = async (settingId) => {
  await backEndApiCall("POST", `/genernalSetting/delete/${settingId}`);
};

export const editSetting = async (settingId, newValue) => {
  await backEndApiCall("POST", "/genernalSetting/" + settingId, {
    indexOrder: newValue.indexOrder,
    context: newValue.context,
    contextType: newValue.contextType,
    title: {
      he: newValue.textArray[0].title,
      ar: newValue.textArray[1].title,
      en: newValue.textArray[2].title,
    },
  });
};

export const reorderGeneralSetting = async (idArray) => {
  await backEndApiCall("POST", "/generalSetting/reorder", {
    idArray,
  });
};
