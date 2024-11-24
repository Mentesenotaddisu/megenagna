import "../App.css";
import React, { useState } from "react";
function Friends() {
  const [isNavopen, SetisNavopen] = useState(false);
  const [isfriends, Setisfriends] = useState(false);
  const [iscontacts, Setiscontacts] = useState(true);

  const underfriend = () => {
    Setisfriends(true);
    Setiscontacts(false);
  };
  const underinvite = () => {
    Setiscontacts(true);
    Setisfriends(false);
  };

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
            <p className="pagen">Friends</p>
          </div>
        </div>

        <div className="body" onClick={closenav}>
          <div className="contact-cont">
            <button onClick={underfriend} className={`contacts-cont friends`}>
              <p className="friends-p">friends</p>
            </button>
            <button onClick={underinvite} className={`contacts-cont contact`}>
              <p className="contacts-p">Invite</p>
            </button>
            <div
              className={`${isfriends ? "under" : "under unde"} ${
                iscontacts ? "under unde" : "under"
              }`}
            ></div>
          </div>
          {isfriends ? (
            <div className="friends-content">
              <p className="friens-title">Friends</p>
            </div>
          ) : iscontacts ? (
            <div></div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default Friends;
