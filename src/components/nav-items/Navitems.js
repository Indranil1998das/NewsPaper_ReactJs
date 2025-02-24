import React from "react";
import "./nav_items.css";
import { useGlobalContext } from "../../Api/Context";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
var iso3311a2 = require("iso-3166-1-alpha-2");
function Navitems({ openMenu }) {
  const { ChangeStateValue } = useGlobalContext();
  const location = useLocation();
  const [country, setCountry] = React.useState({
    country_name: "India",
    country_id: iso3311a2.getCode("India"),
  });

  React.useEffect(() => {
    ChangeStateValue(country, location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, country]);

  return (
    <div className="nav-list">
      <div
        className={
          openMenu ? "menu-nav-list-categories" : "nav-list-categories"
        }
      >
        <div className="nav-list-categories-div">
          <ul
            className={
              openMenu
                ? "menu-nav-list-categories-ul "
                : "nav-list-categories-ul"
            }
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/business">Business</NavLink>
            </li>
            <li>
              <NavLink to="/entertainment">Entertainment</NavLink>
            </li>
            <li>
              <NavLink to="/health">Health</NavLink>
            </li>
            <li>
              <NavLink to="/science">Science</NavLink>
            </li>
            <li>
              <NavLink to="/sports">Sports</NavLink>
            </li>
            <li>
              <NavLink to="/technology">Technology</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-search">
        <div className="nav-search-input">
          <span> Select Your country : </span>
          <select
            onChange={(e) =>
              setCountry({
                country_name: e.target.value,
                country_id: iso3311a2.getCode(e.target.value),
              })
            }
          >
            <option value="India" id="in">
              India
            </option>
            <option value="United Kingdom" id="uk">
              United Kingdom
            </option>
            <option value="United States" id="us">
              United States
            </option>
            <option value="Argentina" id="us">
              Argentina
            </option>
            <option value="Australia" id="Australia">
              Australia
            </option>
            <option value="Austria" id="us">
              Austria
            </option>
            <option value="Belgium" id="us">
              Belgium
            </option>
            <option value="Brazil" id="us">
              Brazil
            </option>
            <option value="Canada" id="us">
              Canada
            </option>
            <option value="China" id="us">
              China
            </option>
          </select>
        </div>
        <div className="nav-new-type">
          {location.pathname === "/" ? "ALL NEWS" : "TOP HEADLINES"}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navitems);
