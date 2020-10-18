import React from "react";
import { useRecoilState } from "recoil";
import AddEntryBar from "../../general/addEntryBar";
import SettingEntryContent from "../../general/settingEntryContent";
import { newSettingAtom } from "../../../recoilsState/newSetting";

function GeneralSettingScreen() {
  const [isAdd, setIsAdd] = React.useState(true);
  const [newEntrySetting, setNewEntrySetting] = useRecoilState(newSettingAtom);

  const handleSaveClick = () => {
    setIsAdd(true);
  };
  return (
    <div className="barStyle">
      <form onSubmit={handleSaveClick}>
        <AddEntryBar
          name={"Setting"}
          isAdd={isAdd}
          onAddClick={() => setIsAdd(false)}
          onCancelClick={() => setIsAdd(true)}
          onSaveClick={handleSaveClick}
        />

        {!isAdd ? (
          <SettingEntryContent
            textArray={newEntrySetting.textArray}
            canEdit={true}
          />
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default GeneralSettingScreen;
