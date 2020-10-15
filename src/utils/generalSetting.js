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
