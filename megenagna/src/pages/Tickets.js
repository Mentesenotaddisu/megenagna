import "../App.css";
import React, { useState } from "react";
function Tickets() {
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
            <p className="pagen">Tickets</p>
          </div>
        </div>

        <div className="body" onClick={closenav}>
          <div className="tickets-booking-cont">
            <p className="booking-p">No upcoming bookings avaliabel </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tickets;
