import React from "react";
import $ from "jquery";
import { Component } from "react";

function Header(prps) {
  function mobileMenu() {
    $(".mobile_menu").slideToggle();
    console.log(true);
  }
  return (
    <header id="headerType" className={`header__wrap ${prps.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            SEOUL <em>site</em>
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            <li>
              <a href="/">CULTURE</a>
            </li>
            <li>
              <a href="/">MODERN/TRADITION</a>
            </li>
            <li>
              <a href="/">FASHION</a>
            </li>
            <li>
              <a href="/">FOOD</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">LOGIN</a>
          <button className="mbtn" onClick={mobileMenu}></button>
        </div>

        <div className="mobile_menu">
          <button className="cbtn" onClick={mobileMenu}></button>
          <div class="sub">
            <li>
              <a href="/">CULTURE</a>
            </li>
            <li>
              <a href="/">MODERN/TRADITION</a>
            </li>
            <li>
              <a href="/">FASHION</a>
            </li>
            <li>
              <a href="/">FOOD</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
