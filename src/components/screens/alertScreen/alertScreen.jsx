import React from "react";
import AddEntry from "../../general/addEntry";
import AlertEntryContainer from "../../general/alertEntryContainer";

import "./alertScreen.css";

function AlertScreen() {
  const [isAdd, setIsAdd] = React.useState(true);
  return (
    <div className="alertScreen">
      <AddEntry
        isAdd={isAdd}
        onAddClick={() => setIsAdd(false)}
        onCancelClick={() => setIsAdd(true)}
      />
      {!isAdd ? <AlertEntryContainer /> : ""}
    </div>
  );
}

export default AlertScreen;
