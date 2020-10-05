import React from "react";
import AddEntry from "../../general/addEntry";
import BloodTypeFilter from "../../general/bloodTypeFilter";
import EntryTitle from "../../general/entryTitle";
import "./alertScreen.css";

function AlertScreen() {
  return (
    <div className="alertScreen">
      <AddEntry />
      <BloodTypeFilter />
      <EntryTitle />
    </div>
  );
}

export default AlertScreen;
