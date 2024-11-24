import "../App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
function Homepage({ data }) {
  const [isNavopen, SetisNavopen] = useState(false);
  const [windowwidth, setwindowwidth] = useState(window.innerWidth);

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
  const small = windowwidth <= 768;
  const larger = windowwidth >= 768;
  return (
    <div className="App">
      {small && (
        <div className="head">
          <div className="pagename">
            <p className="pagen"></p>
          </div>
        </div>
      )}
      <main onClick={closenav}>
        {small && (
          <div className="megenagna-message">
            <p className="message">Find Events</p>
            <p className="message">Around Your Area</p>
          </div>
        )}

        <div className="body" onClick={closenav}>
          {larger && (
            <div className="big-home-message">
              <div className="img-overlay"></div>
              <p className="tag-line">Find Events Around Your Area</p>
              <img
                src={`${process.env.PUBLIC_URL}/party.jpeg`}
                alt="home-big-img"
                className="home-img-bg"
              />
            </div>
          )}
          {larger && (
            <div className="upcoming-txt-cont">
              <p className="upcoming-txt">Upcoming Events</p>
            </div>
          )}
          <div className="event-container">
            {data.map((item) => (
              <div className="event" key={item.id}>
                <Link className="Link" to={`/item/${item.id}`}>
                  <div className="image-event">
                    <img className="imgev" src="./event.jpg" />
                  </div>
                  <div className="date">
                    <p>sep</p>
                    <p>27</p>
                  </div>
                  <div className="like"></div>
                  <div className="event-text-cont">
                    <p className="bold-header">{item.name}</p>
                    <div className="exp-cont">
                      <p className="event-exp">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
