import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import AddEntryBar from "../../general/addEntryBar";
import SettingEntryContent from "../../general/settingEntryContent";
import GeneralSettingEntryContainer from "../../general/generalSettingEntryContainer";

import {
  newSettingAtom,
  getGeneralSettingAtom,
} from "../../../recoilsState/newSetting";
import {
  addGeneralSetting,
  getGeneralSettingData,
} from "../../../utils/generalSetting";

function GeneralSettingScreen() {
  const [isAdd, setIsAdd] = React.useState(true);
  const [getGeneralSetting, setGetGeneralSetting] = useRecoilState(
    getGeneralSettingAtom
  );
  const [newEntrySetting, setNewEntrySetting] = useRecoilState(newSettingAtom);
  const resetnewEntryData = useResetRecoilState(newSettingAtom);

  React.useEffect(() => {
    getGeneralSettingData()
      .then((data) => {
        setGetGeneralSetting(data);
      })
      .catch(() => {});
  }, []);

  const handleSaveClick = async (e) => {
    e.preventDefault();
    await addGeneralSetting(
      newEntrySetting.context,
      newEntrySetting.contextType,
      newEntrySetting.textArray
    );
    const newGeneralSetting = await getGeneralSettingData();
    setGetGeneralSetting(newGeneralSetting);
    setIsAdd(true);
    resetnewEntryData();
  };

  const handleCancelClick = () => {
    setIsAdd(true);
    resetnewEntryData();
  };
  return (
    <div className="barStyle">
      <form onSubmit={handleSaveClick}>
        <AddEntryBar
          name={"Setting"}
          isAdd={isAdd}
          onAddClick={() => setIsAdd(false)}
          onCancelClick={handleCancelClick}
          onSaveClick={handleSaveClick}
        />

        {!isAdd ? (
          <SettingEntryContent
            textArray={newEntrySetting.textArray}
            context={newEntrySetting.context}
            contextType={newEntrySetting.contextType}
            canEdit={true}
            setData={setNewEntrySetting}
          />
        ) : (
          ""
        )}
      </form>
      {getGeneralSetting.map(({ id, textArray, contextType, context }) => (
        <GeneralSettingEntryContainer
          key={id}
          id={id}
          context={context}
          contextType={contextType}
          textArray={textArray}
        />
      ))}
    </div>
  );
}

export default GeneralSettingScreen;
