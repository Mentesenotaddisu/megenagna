import "../App.css";
import React, { useState, useEffect } from "react";
// const location = useLocation();
import Profile from "./Profile";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
function Enterevents({ data, lo }) {
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

  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));

  if (!item) return <p>Item not found</p>;
  const small = windowwidth <= 768;
  const larger = windowwidth >= 768;
  const itemid = lo.pathname !== "/item/:id";
  return (
    <div className="App">
      <main>
        {small && itemid && (
          <div className="title-cont">
            <Link to="/">
              <div className={`backbutton title-child`}>
                <p>back</p>
              </div>
            </Link>
            <div className={`eventname title-child`}>
              <p>event name</p>
            </div>
            <div className={`event-options title-child`}>
              <p>like</p>
              <p>set</p>
            </div>
          </div>
        )}

        <div className="eventmore">
          <p className="eventnamelong">{item.name}</p>

          <div className="or-img-cont">
            <img
              src={`${process.env.PUBLIC_URL}/party.jpeg`}
              className="IMAGE-BACKDROP"
            />
            <img
              src={`${process.env.PUBLIC_URL}/party.jpeg`}
              className="background-blur"
            />
          </div>
          <div className="discription-short">
            <p classname="discriptio-event-short">
              kjankjdsfdlkjhfdsaklfjhdsfkjndca kj jbfaks dc aksjdfjkasd
              fjakdfhkajdfa df adskfjklaja g askjgljasglas glkasjglkasg
              akgjlkajsg;lka ga;skgj;laknsg as;kgj;alkjg
              kjankjdsfdlkjhfdsaklfjhdsfkjndca kj jbfaks dc aksjdfjkasd
              fjakdfhkajdfa df adskfjklaja g askjgljasglas glkasjglkasg
              akgjlkajsg;lka ga;skgj;laknsg as;kgj;alkjg
            </p>
          </div>
          <div className="three-button">
            <div>
              <img src={`${process.env.PUBLIC_URL}/svg0.svg`} height={40} />
              <p className="text-buttton">interested</p>
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/svg0.svg`} height={40} />
              <p className="text-buttton">going</p>
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/svg0.svg`} height={40} />
              <p className="text-buttton">share</p>
            </div>
          </div>
          <div className="loc-and-date">
            <div className="location-lo">
              <img className="svg-location" />
              <p className="exact-location">hayyat regency addis ababa</p>
            </div>
            <div className="date-da">
              <img className="svg-date" />
              <Link to="/">
                <p className="exact-date">show all dates</p>
              </Link>
            </div>
          </div>
          <Link to="/Friends">
            <p className="invitation">View All / Invite Friends</p>
          </Link>
          <p className="about-event-header">About the Event</p>
          <div className="discription-short">
            <p classname="discriptio-event-short">
              kjankjdsfdlkjhfdsaklfjhdsfkjndca kj jbfaks dc aksjdfjkasd
              fjakdfhkajdfa df adskfjklaja g askjgljasglas glkasjglkasg
              akgjlkajsg;lka ga;skgj;laknsg as;kgj;alkjg
              kjankjdsfdlkjhfdsaklfjhdsfkjndca kj jbfaks dc aksjdfjkasd
              fjakdfhkajdfa df adskfjklaja g askjgljasglas glkasjglkasg
              akgjlkajsg;lka ga;skgj;laknsg as;kgj;alkjg
            </p>
          </div>
          <div className="tags">
            <div className="tag1">travel</div>
            <div className="tag2">travel</div>
            <div className="tag3">travel</div>
          </div>
          <div className="organizer-div">
            <p className="organizer-head">Organizer</p>
            <p className="organizer-name">Calesed Events</p>
          </div>
          <div className="location-map">
            <p className="map-location">Location</p>
            <div className="map"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Enterevents;
