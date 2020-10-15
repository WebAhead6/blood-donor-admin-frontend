import React from "react";
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
  const handleContextChange = (value) => {
    if (canEdit) getBase64(value).then((res) => onContextChange(res));
  };
  return (
    <div className="fileContextType">
      <a href={context} download="file.pdf">
        download file
      </a>
      {canEdit ? (
        <>
          <label> Upload file </label>
          <input
            className="fileContextType-input"
            type="file"
            name="file"
            accept=".pdf"
            required
            // value={context}
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
