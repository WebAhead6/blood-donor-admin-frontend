import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import AddEntryBar from "../../general/addEntryBar";
import SettingEntryContent from "../../general/settingEntryContent";
import GeneralSettingEntryContainer from "../../general/generalSettingEntryContainer";
import { Draggable } from "react-beautiful-dnd";
import DragDropWrapper from "../../general/dragDropWrapper";
import reorderAfterDrap from "../../../utils/reorderAfterDrop";

import {
  newSettingAtom,
  getGeneralSettingAtom,
} from "../../../recoilsState/newSetting";
import {
  addGeneralSetting,
  getGeneralSettingData,
  reorderGeneralSetting,
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

  const handleDragAndDrop = async (result) => {
    const items = reorderAfterDrap(
      getGeneralSetting,
      result?.source?.index,
      result?.destination?.index
    );
    const orderItem = items.map(({ id }) => id);
    setGetGeneralSetting(items);
    await reorderGeneralSetting(orderItem);
  };

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
      <DragDropWrapper onDragEnd={handleDragAndDrop}>
        {getGeneralSetting.map(
          ({ id, textArray, contextType, context, indexOrder }, index) => (
            <Draggable draggableId={id} index={index} key={id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <GeneralSettingEntryContainer
                    key={id}
                    id={id}
                    context={context}
                    contextType={contextType}
                    textArray={textArray}
                    indexOrder={indexOrder}
                  />
                </div>
              )}
            </Draggable>
          )
        )}
      </DragDropWrapper>
    </div>
  );
}

export default GeneralSettingScreen;
