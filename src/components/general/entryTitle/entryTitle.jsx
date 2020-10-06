import React from "react";
import "./entryTitle.css";
import { newAlertTextAtom } from "../../../recoilsState";
import { useRecoilState } from "recoil";

function EntryTitle() {
  const [entryText, setEntryText] = useRecoilState(newAlertTextAtom);

  return (
    <div>
      {entryText.map(({ language, context, title }) => (
        <fieldset>
          <legend>{language}</legend>

          <label for="title">title</label>
          <br />
          <input
            className="entryTitle-input"
            type="text"
            name="title"
            value={title}
            onChange={(e) =>
              setEntryText({
                ...entryText,
                text: e.target.value,
              })
            }
          />
          <br />
          <label for="sub-title">sub-title</label>
          <br />
          <input
            className="entryTitle-input"
            type="text"
            name="title"
            value={context}
            onChange={(e) =>
              setEntryText({
                ...entryText,
                subText: e.target.value,
              })
            }
          />
        </fieldset>
      ))}
    </div>
  );
}

export default EntryTitle;
