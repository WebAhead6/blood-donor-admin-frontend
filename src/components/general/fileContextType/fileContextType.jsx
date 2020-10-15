import React, { useRef } from "react";
import "./fileContextType.css";

function getBase64(file) {
  console.log(file);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);
      resolve(reader.result);
    });
    reader.readAsDataURL(file);
  });
}

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
          <input type="button" value="download file" />
        </a>
      )}
      {canEdit ? (
        <>
          <input
            type="button"
            value="upload file"
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
