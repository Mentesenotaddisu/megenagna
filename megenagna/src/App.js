import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Favorite from "./pages/favorite";
import Tickets from "./pages/Tickets";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Createvent from "./pages/createevent";
import Enterevents from "./pages/enterevent";
function App() {
  const [isNavopen, SetisNavopen] = useState(false);
  const location = useLocation();
  const [windowwidth, setwindowwidth] = useState(window.innerWidth);
  const [user, setuser] = useState(true);

  const admin = () => {
    setuser(!user);
  };

  const localData = [
    { id: 1, name: "guzo trip", description: "This is item 1" },
    { id: 2, name: "kitfo fest", description: "This is item 2" },
    { id: 3, name: "the great ethiopian run", description: "This is item 3" },
    { id: 4, name: "guzo hicking", description: "This is item 1" },
    { id: 5, name: "kitfo fest", description: "This is item 2" },
    { id: 6, name: "the great ethiopian run", description: "This is item 3" },
    { id: 7, name: "guzo hicking", description: "This is item 1" },
    { id: 8, name: "kitfo fest", description: "This is item 2" },
    { id: 9, name: "the great ethiopian run", description: "This is item 3" },
  ];

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
  const showHamburgerMenu =
    location.pathname !== "/item/:id" && windowwidth <= 768;
  return (
    <div className="App">
      <header className="App-header" onClick={closenav}>
        {small && (
          <nav className={isNavopen ? "navigation" : "navigation closed"}>
            <div className="nav-logo"></div>
            <ul className="un-list">
              <Link className="links" to="/">
                Home
              </Link>

              <Link to="/create">
                <a className="links">Create Events</a>
              </Link>
              <a className="links">Manage Events</a>
              <a className="links">Settings</a>

              <a className={`links log-outlink`}>Logout</a>
            </ul>
          </nav>
        )}

        {larger && (
          <div className="navigation-larger">
            <div className="larger-nav-logo">
              <img
                src={`${process.env.PUBLIC_URL}/icon.png`}
                alt="logo"
                className="icon-logo"
                height="30"
                width="30"
              />
              <p className="megenagna">Megenagna</p>
            </div>
            <div className="links-larger-nav">
              <Link to="/" className={`llink home`}>
                Home
              </Link>
              <Link to="/favorite" className={`llink home`}>
                Favorite
              </Link>
              <Link to="/Friends" className={`llink home`}>
                Friends
              </Link>
              {admin && (
                <Link to="/create" className={`llink home`}>
                  create events
                </Link>
              )}
              <Link to="/Tickets" className={`llink home`}>
                Tickets
              </Link>
            </div>
            <div className="two-links-right-nav">
              <Link to="/setting" className={`bna-p home`}>
                Settings
              </Link>
              <Link to="/Profil" className={`bna-p home`}>
                Profile
              </Link>
            </div>
          </div>
        )}
      </header>
      <main>
        {showHamburgerMenu && (
          <div onClick={navopen} className="ham-svg">
            <img
              src={`${process.env.PUBLIC_URL}/menu.svg`}
              alt="menu svg"
              height="20"
              className="size-svg"
            />
          </div>
        )}

        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/" element={<Homepage data={localData} />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/create" element={<Createvent />} />
          <Route
            path="/item/:id"
            element={<Enterevents data={localData} lo={location} />}
          />
        </Routes>
        {small && (
          <div className="bottom-nav">
            <div className="bnavs">
              <img height="25" width="25" src="./svg0.svg" alt="home-svg" />
              <Link to="/" className={`bna-p home`}>
                Home
              </Link>
            </div>
            <div className="bnavs">
              <img
                height="25"
                width="25"
                src="./svg1.svg"
                alt="favorites-svg"
              />
              <Link to="/favorite" className={`bna-p home`}>
                Favorite
              </Link>
            </div>
            <div className="bnavs">
              <img height="25" width="25" src="./svg2.svg" alt="tickets-svg" />
              <Link to="/Tickets" className={`bna-p home`}>
                Tickets
              </Link>
            </div>
            <div className="bnavs">
              <img height="25" width="25" src="./svg3.svg" alt="friens-svg" />
              <Link to="/Friends" className={`bna-p home`}>
                Friends
              </Link>
            </div>
            <div className="bnavs">
              <img
                height="25"
                width="25"
                className="profile"
                src="./svg4.svg"
                alt="profile-svg"
              />
              <Link to="/Profile" className={`bna-p home`}>
                Profile
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
