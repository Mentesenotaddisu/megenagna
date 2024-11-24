import "../App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
function Steptwo({ data, onChange, onNext }) {
  const [tags, settags] = useState([]);
  const [datatags, setdatatags] = useState("");

  const addTag = () => {
    if (data.Tag && !tags.includes(data.Tag)) {
      settags([...tags, data.Tag]);
      setdatatags({
        datatags: "",
      });
    }
  };

  return (
    <div className="contu">
      <div className="middlediv">
        <h2 classname="eventinpt">Create Events here</h2>
        <label className="ti" htmlFor="eventDescriptionshort">
          insert tag
        </label>
        <div className="tag-div">
          <input
            type="text"
            className="input"
            placeholder="tag"
            value={data.Tag}
            onChange={(e) => onChange("Tag", e.target.value)}
          />
          <button onClick={addTag} className="add">
            add
          </button>
        </div>
        {tags.map((tag, index) => (
          <p className="tagslist">{tag}</p>
        ))}
        {data.Tag && <button onClick={onNext}>submit ordered tags</button>};
        <button onClick={onNext}>skip</button>
      </div>
    </div>
  );
}

export default Steptwo;
