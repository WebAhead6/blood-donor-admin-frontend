import React, { useState } from "react";
import RichTextEditor from "react-rte";

function RichTextContextType({
  onContextChange,
  context = "<p></p>",
  canEdit,
}) {
  const richContext = RichTextEditor.createValueFromString(context, "html");
  const handleContextChange = (newValue) => {
    if (canEdit) onContextChange(newValue.toString("html"));
    console.log(newValue.toString("html"));
  };

  return (
    <div>
      <RichTextEditor value={richContext} onChange={handleContextChange} />
    </div>
  );
}
export default RichTextContextType;
