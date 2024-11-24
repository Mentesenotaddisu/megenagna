import "../App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
function Stepone({ data, onChange, onNext }) {
  const [dates, setDates] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const generateDatesInBetween = () => {
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    const dateArray = [];

    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      dateArray.push(new Date(date));
    }
    setDates(dateArray);
    return dateArray;
  };
  const handleStartDateChange = (date) => {
    onChange("startDate", date);
  };

  const handleEndDateChange = (date) => {
    onChange("endDate", date);
  };

  const calc = () => {
    const generatedDates = generateDatesInBetween();

    if (generatedDates.length === 0) {
      alert("There are no dates");
      console.log("There are no dates");
    } else {
      alert(
        `The dates are: ${generatedDates
          .map((date) => date.toDateString())
          .join(", ")}`
      );
      console.log(
        `The dates are: ${generatedDates
          .map((date) => date.toDateString())
          .join(", ")} this is the location ${this}`
      );
    }
  };
  return (
    <div className="contu">
      <div className="middlediv">
        <h2 classname="eventinpt">Create Events here</h2>
        <label className="ti" htmlFor="eventDescriptionshort">
          Short Description
        </label>
        <input
          type="text"
          className="input"
          placeholder="Event Title"
          value={data.Eventname}
          onChange={(e) => onChange("Eventname", e.target.value)}
        />
        <label className="ti" htmlFor="eventDescriptionlong">
          Short Description
        </label>
        <textarea
          placeholder="Enter Short Description here..."
          className="textarea"
          value={data.shortdescription}
          onChange={(e) => onChange("shortdescription", e.target.value)}
        />
        <label className="ti" htmlFor="eventDescription">
          Event Description
        </label>
        <textarea
          placeholder="Enter Event Description here..."
          className="textarea"
          value={data.description}
          onChange={(e) => onChange("description", e.target.value)}
        />
        <div className="ti">
          <label className="ti" htmlFor="eventDescription">
            Event Region
          </label>
          <select
            id="eventType"
            className="choose"
            value={data.Eventregion}
            onChange={(e) => onChange("type", e.target.value)}
            style={{ padding: "0.5rem", fontSize: "1rem", flex: 1 }}
          >
            <option value="" disabled>
              Select event Region
            </option>
            <option value="Addis Ababa Area">Addis Ababa Area</option>
            <option value="Washington, Dc Area">Washington, Dc Area</option>
            <option value="NewYork City Area">NewYork City Area</option>
            <option value="Atlanta Area">Atlanta Area</option>
          </select>
        </div>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <DatePicker
            selected={data.startDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy/MM/dd"
            placeholderText="Select start date"
            className="input"
            style={{ padding: "0.5rem", fontSize: "1rem", flex: 1 }}
          />
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>

          <DatePicker
            selected={data.endDate}
            onChange={handleEndDateChange}
            dateFormat="yyyy/MM/dd"
            placeholderText="Select end date"
            className="input"
          />
        </div>

        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default Stepone;
