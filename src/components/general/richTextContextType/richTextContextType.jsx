import React, { useState } from "react";
import RichTextEditor from "react-rte";

function RichTextContextType() {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  return (
    <div>
      <RichTextEditor
        value={value}

        // onChange={this.onChange}
      />
    </div>
  );
}
export default RichTextContextType;
