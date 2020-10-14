import backEndApiCall from "./backEndApiCall";
export const addAlert = async (bloodType, member, entryTextArray) => {
  return await backEndApiCall("POST", "/alerts", {
    bloodType: bloodType || [],
    member: member,
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

  return data.map(({ context, title, bloodType, id, addedDate, member }) => ({
    id,
    addedDate,
    bloodType,
    member,
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

export const deleteAlert = async (alertId) => {
  await backEndApiCall("POST", `/alerts/delete/${alertId}`);
};

export const editAlert = async (alertId, newValue) => {
  await backEndApiCall("POST", "/alerts/" + alertId, {
    addedDate: newValue.addedDate,
    member: newValue.member,
    bloodType: newValue.bloodType || [],
    title: {
      he: newValue.textArray[0].title,
      ar: newValue.textArray[1].title,
      en: newValue.textArray[2].title,
    },
    context: {
      he: newValue.textArray[0].context,
      ar: newValue.textArray[1].context,
      en: newValue.textArray[2].context,
    },
  });
};
