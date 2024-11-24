import "../App.css";
import React, { useState } from "react";
function Favorite() {
  const [isNavopen, SetisNavopen] = useState(false);

  const navopen = () => {
    SetisNavopen(!isNavopen);
  };
  const closenav = () => {
    SetisNavopen(false);
  };
  return (
    <div className="App">
      <main onClick={closenav}>
        <div className="head">
          <div className="pagename">
            <p className="pagen">Favourites</p>
          </div>
        </div>

        <div className="body" onClick={closenav}>
          <div className="no-favourites-cont">
            <div className="nofavp-container">
              <p className="no-favourrites-p">
                Oops! Your favorites list is empty. Explore a world of exciting
                events and discover your next favorite!Don't miss out on the
                fun, start exploring now!
              </p>
            </div>
            <div className="nofavp-button">
              <button className="button-no-fav">EXPLORE EVENTS</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Favorite;
