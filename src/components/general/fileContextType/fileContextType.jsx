import React, { useRef } from "react";
import getBase64 from "../../../utils/getBase64";
import "./fileContextType.css";

function FileContextType({ onContextChange, context, canEdit }) {
  const filefieldRef = useRef();
  const handleUploadClick = () => {
    filefieldRef.current.click();
  };
  const handleContextChange = (value) => {
    if (canEdit) getBase64(value).then((res) => onContextChange(res));
  };
  return (
    <div className="fileContextType">
      {context && (
        <a href={context} download="file.pdf">
          <input
            type="button"
            value="download"
            className="fileContextType-downloadFile"
          />
        </a>
      )}
      {canEdit ? (
        <>
          <input
            className="fileContextType-uploadFile"
            type="button"
            value="upload"
            onClick={handleUploadClick}
          />
          <input
            className="fileContextType-hidden"
            type="text"
            value={context}
            required
          />
          <input
            ref={filefieldRef}
            className="fileContextType-input"
            type="file"
            name="file"
            accept=".pdf"
            aria-label="File browser example"
            onChange={(e) => handleContextChange(e.target.files[0])}
          ></input>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default FileContextType;
