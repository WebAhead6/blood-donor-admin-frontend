import backEndApiCall from "./backEndApiCall";
export const addAlert = async (bloodType, entryTextArray) => {
  return await backEndApiCall("POST", "/alerts", {
    bloodType: bloodType.value,
    title: {
      he: entryTextArray[0].title,
      ar: entryTextArray[1].title,
      en: entryTextArray[2].title,
    },
    context: {
      he: entryTextArray[0].context,
      ar: entryTextArray[1].context,
      en: entryTextArray[2].context,
    },
  });
};
export const getAlertsData = async () => {
  const { data } = await backEndApiCall("GET", "/api/alerts");
  return data.map(({ context, title, bloodType }) => ({
    bloodType,
    textArray: [
      {
        language: "Hebrew",
        context: context.he,
        title: title.he,
      },
      {
        language: "Arabic",
        context: context.ar,
        title: title.ar,
      },
      {
        language: "English",
        context: context.en,
        title: title.en,
      },
    ],
  }));
};
