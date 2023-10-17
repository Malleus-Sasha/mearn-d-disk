import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/img/navbar-logo.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
import { showLoader } from "../../reducers/appReducer";
import { getFiles, searchFiles } from "../../actions/file";

const Navbar = () => {
  const currentDir = useSelector(state => state.files.currentDir)
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);

  function searchChangeHandler(e) {
    setSearchName(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    dispatch(showLoader());
    if (e.target.value !== "") {
      setSearchTimeout(
        setTimeout((value) => {
            dispatch(searchFiles(value));
          }, 500, e.target.value)
      );
    } else {
      dispatch(getFiles(currentDir));
    }
  }

  return (
    <div className="navbar">
      <div className="container">
        <NavLink to="/" className="link-logo">
          <img src={Logo} alt="" className="navbar__logo" />
          <div className="navbar__header">MERN CLOUD</div>
          {isAuth && (
            <input
              value={searchName}
              onChange={(e) => searchChangeHandler(e)}
              className="navbar__search"
              type="text"
              placeholder="File name..."/>
          )}
        </NavLink>
        {!isAuth && (
          <div className="navbar__login">
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className="navbar__registration">
            <NavLink to="/registration">Registration</NavLink>
          </div>
        )}
        {isAuth && (
          <div className="navbar__login" onClick={() => dispatch(logout())}>
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
