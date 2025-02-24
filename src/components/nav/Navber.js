import "./nav.css";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import Navitems from "../nav-items/Navitems";
function Navber() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuopenHandler = () => {
    setOpenMenu(!openMenu);
  };
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);
  const screen = React.useRef();
  const screenHandler = () => {
    setScreenSize(window.innerWidth);
  };
  screen.current = window.addEventListener("resize", screenHandler);

  return (
    <>
      <nav className="main-nav" ref={screen}>
        <div>
          <div className="nav-div">
            <div className="news-logo">
              <span>NEWS</span>
            </div>
            <CiMenuKebab className="menu" onClick={menuopenHandler} />
          </div>
        </div>
        <Navitems openMenu={screenSize > 700 ? false : openMenu} />
      </nav>
    </>
  );
}

export default Navber;
