import "../App.css";
import React, { useState } from "react";
function Profile() {
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
            <p className="pagen">Profile</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
