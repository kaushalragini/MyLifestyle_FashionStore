import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://blog.lifestylestores.com/wp-content/uploads/2021/02/Lifestyle-Logo-1160x444-1-800x306.webp"
        alt=""
      />
      <div className="header_nav">
        <div className="header_option">Women</div>
        <div className="header_option">Men</div>
        <div className="header_option">Kids</div>
        <div className="header_option">Shoes & Bags</div>
        <div className="header_option">Beauty</div>
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon />
      </div>
      <div className="header_nav">
        <div className="header_option1">
          <span className="header_optionline1">hello guest</span>
          <span className="header_optionline2">Sign In </span>
        </div>
        <div className="header_option1">
          <span className="header_optionline1">hello guest</span>
          <span className="header_optionline2">Sign In </span>
        </div>
        <div className="header_option1">
          <span className="header_optionline1">hello guest</span>
          <span className="header_optionline2">Sign In </span>
        </div>
        <div className="header_option1">
          <span className="header_optionline1">hello guest</span>
          <span className="header_optionline2">Sign In </span>
        </div>
        <div className="header_option1">
          <span className="header_optionline1">hello guest</span>
          <span className="header_optionline2">Sign In </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
