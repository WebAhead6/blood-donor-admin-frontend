import React from "react";
import "./menuEntryContent.css";
import TextFields from "../textFields";
import RedirectionLink from "../redirectionLink";

function MenuEntryContent({
  textArray = [],
  setData,
  canEdit,
  redirectionLink,
}) {
  const onTitleChange = (index, value) => {
    const arrClone = [...textArray];
    const changedData = { ...textArray[index], title: value };
    arrClone[index] = changedData;

    setData({redirectionLink, textArray: arrClone });
  };
  const onredirectionLinkChange = (value) => {
    setData({textArray, redirectionLink: value });
  };



  return (
    <div className="menuEntryContent">
      <RedirectionLink
        canEdit={canEdit}
        redirectionLink={redirectionLink}
        onredirectionLinkChange={(e) => onredirectionLinkChange(e.target.value)}
      />

      {textArray.map(({ language, title }, index) => (
        <TextFields
          showSubTitle={false}
          key={language}
          legend={language}
          title={title}
          canEdit={canEdit}
          onTitleChange={(e) => onTitleChange(index, e.target.value)}
        />
      ))}
    </div>
  );
}
export default MenuEntryContent;
