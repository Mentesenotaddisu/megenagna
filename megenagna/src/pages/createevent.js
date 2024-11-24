import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";
import Stepthree from "./Stepthree";
import Stepfour from "./Stepfour";
function Createvent() {
  const [isNavopen, SetisNavopen] = useState(false);
  const [windowwidth, setwindowwidth] = useState(window.innerWidth);
  const [currentStep, setCurrentStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    Eventname: "",
    shortdescription: "",
    description: "",
    startDate: "",
    Eventregion: "",
    Tag: "",
    Image: null,
    location: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/v1/events", formData);
      console.log("Event created:", response.data);
      setSubmissionStatus("Event created successfully!");
      alert(submissionStatus);
    } catch (error) {
      console.error("Error creating event:", error);
      setSubmissionStatus("Failed to create event. Please try again.");
      alert(submissionStatus);
    }
  };

  useEffect(() => {
    const handelresize = () => {
      setwindowwidth(window.innerWidth);
    };
    window.addEventListener("resize", handelresize);

    return () => {
      window.removeEventListener("resize", handelresize);
    };
  }, []);
  const navopen = () => {
    SetisNavopen(!isNavopen);
  };
  const closenav = () => {
    SetisNavopen(false);
  };
  const handleNext = () => setCurrentStep(currentStep + 1);
  const handleBack = () => setCurrentStep(currentStep - 1);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const small = windowwidth <= 768;
  const larger = windowwidth >= 768;
  return (
    <div className="App">
      <main onClick={closenav}>
        {small && (
          <div className="head">
            <div className="pagename">
              <p className="pagen">Create Event</p>
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <Stepone
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <Steptwo
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
            onClick={handleSubmit}
          />
        )}
        {currentStep === 3 && (
          <Stepthree
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 4 && (
          <Stepfour
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {/* {<button className="sub" onClick={handleSubmit}></button>} */}
        {/* {currentStep === 4 && <Confirm data={formData} onBack={handleBack} />} */}
        {submissionStatus && <p>{submissionStatus}</p>}
      </main>
    </div>
  );
}

export default Createvent;
