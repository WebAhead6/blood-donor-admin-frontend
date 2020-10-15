import React, { useState } from "react";
import RichTextEditor from "react-rte";

function RichTextContextType({ onContextChange, context, canEdit }) {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const handleContextChange = (value) => {
    if (canEdit) onContextChange(value);
  };

  return (
    <div>
      <RichTextEditor value={context} onChange={handleContextChange(value)} />
    </div>
  );
}
export default RichTextContextType;
