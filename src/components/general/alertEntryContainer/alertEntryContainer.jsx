import React from "react";
import "./alertEntryContainer.css";
import EntryTitle from "../../general/entryTitle";
import BloodTypeFilter from "../../general/bloodTypeFilter";

function AlertEntryContainer() {
  return (
    <div className="alertScreen">
      <BloodTypeFilter />
      <EntryTitle />
    </div>
  );
}
export default AlertEntryContainer;
