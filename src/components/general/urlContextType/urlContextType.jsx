import React from "react";

function UrlContextType() {
  return (
    <div>
      <input
        type="url"
        name="url"
        placeholder="https://example.com"
        pattern="https://.*"
        required
      ></input>
    </div>
  );
}
export default UrlContextType;
