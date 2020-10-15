import React from "react";
import "./settingContextType.css";
import UrlContextType from "../../general/urlContextType";
import RichTextContextType from "../../general/richTextContextType";
import FileContextType from "../../general/fileContextType";

function SettingContextType({
  canEdit,
  contextType,
  context,
  onContextTypeChange,
  onContextChange,
}) {
  const [iscontextType, setIsContextType] = React.useState("url");
  const handleContextTypeChange = (value) => {
    if (canEdit) onContextTypeChange(value);
  };
  return (
    <div className="settingContextType">
      <p>Please select your context type</p>
      <input
        type="radio"
        value="url"
        name="contextType"
        required
        checked={contextType === "url"}
        onChange={(e) => handleContextTypeChange(e.target.value)}
      />
      <label>URL</label>
      <input
        type="radio"
        name="contextType"
        value="file"
        checked={contextType === "file"}
        onChange={(e) => handleContextTypeChange(e.target.value)}
      />
      <label>File</label>
      <input
        type="radio"
        name="contextType"
        value="rich-text"
        checked={contextType === "rich-text"}
        onChange={(e) => handleContextTypeChange(e.target.value)}
      />
      <label>Rich Text</label>
      {contextType === "url" ? (
        <UrlContextType
          onContextChange={onContextChange}
          context={context}
          canEdit={canEdit}
        />
      ) : contextType === "file" ? (
        <FileContextType
          onContextChange={onContextChange}
          context={context}
          canEdit={canEdit}
        />
      ) : contextType === "rich-text" ? (
        <RichTextContextType
          onContextChange={onContextChange}
          context={context}
          canEdit={canEdit}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default SettingContextType;
