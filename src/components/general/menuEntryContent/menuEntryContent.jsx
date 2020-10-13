import React from "react";
import "./menuEntryContent.css";
import TextFields from "../textFields";
import RedirectionLink from "../redirectionLink";

function MenuEntryContent({
  textArray = [],
  setData,
  canEdit,
  redirectionLink
}) {

  const onTitleChange = ( value) => {//FIXME:
      setData({   });
  };
  const onredirectionLinkChange = (value) => {
    setData({ redirectionLink: value });
    console.log(value);
  };

  return (
    <div className="menuEntryContent">

      <RedirectionLink
        canEdit={canEdit}
        redirectionLink={redirectionLink}

        onredirectionLinkChange={(e) => onredirectionLinkChange( e.target.value)}

      />

      {textArray.map(({ language,  title }, index) => (
        <TextFields
          key={language}
          legend={language}
          title={title}

          canEdit={canEdit}

          onTitleChange={(e) => onTitleChange( e.target.value)}
        />
      ))}
    </div>
  );
}
export default MenuEntryContent;
