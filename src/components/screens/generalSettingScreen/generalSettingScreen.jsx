import React from "react";
import AddEntryBar from "../../general/addEntryBar";

function GeneralSettingScreen() {
  const [isAdd, setIsAdd] = React.useState(true);

  const handleSaveClick = () => {
    console.log("abeer");
    setIsAdd(true);
  };
  return (
    <div className="barStyle">
      <AddEntryBar
        name={"Setting"}
        isAdd={isAdd}
        onAddClick={() => setIsAdd(false)}
        onCancelClick={() => setIsAdd(true)}
        onSaveClick={handleSaveClick}
      />
    </div>
  );
}

export default GeneralSettingScreen;
