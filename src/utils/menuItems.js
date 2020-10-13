import backEndApiCall from "./backEndApiCall";

export const addItem = async (dataa) => {
  return await backEndApiCall("POST", "/homeMenu", {
    redirectionLink:dataa.redirectionLink,
   
    
  });
};
export const getMenuItemsData = async () => {
  const { data } = await backEndApiCall("GET", "/api/homeMenu");

  return data.map(({src, redirectionLink ,id}) => ({
    id,
    redirectionLink,
    src,
    
  }));
};
export const deleteItem = async (ItemId) => {
  await backEndApiCall("POST", `/homeMenu/delete/${ItemId}`);
};




export const editItem = async (ItemId, newValue) => {
  console.log(ItemId, newValue);
  await backEndApiCall("POST", "/homeMenu/" + ItemId, {
    redirectionLink: newValue.redirectionLink,

  });
};


















// title: {
//   he: entryTextArray[0].title,
//   ar: entryTextArray[1].title,
//   en: entryTextArray[2].title,
// },


// export const getMenuItemsData = async () => {
//   const { data } = await backEndApiCall("GET", "/api/homeMenu");
//   return data.map(({src, redirectionLink ,id, title}) => ({
//     id,
//     redirectionLink,
//     src,
//     textArray: [
//             {
//         language: "Hebrew",
//         title: title.he,
//       },
//       {
//         language: "Arabic",
//         title: title.ar,
//       },
//       {
//         language: "English",
//         title: title.en,
//       },
//     ],
//   }));
// };