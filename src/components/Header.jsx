import React from "react";
import $ from "jquery";
import { Component } from "react";

function HeaderInfo({ menu }) {
  return (
    <li>
      <a href="/">{menu}</a>
    </li>
  );
}

const headerIcon = {
  title: ["Seoul", "site"],
};

const headerMenu = [
  { menu: "CULTURE" },
  { menu: "MODERN/TRADITION" },
  { menu: "FASHION" },
  { menu: "FOOD" },
  { menu: "ABOUT" },
];

const headerMember = {
  btn: ["Github"],
};
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
            {headerIcon.title[0]}
            <em> {headerIcon.title[1]}</em>
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            {headerMenu.map((txt) => (
              <HeaderInfo menu={txt.menu} key={txt.menu} />
            ))}
          </ul>
        </nav>
        <div className="header__member">
          <a href="https://github.com/ydw1996/dw">{headerMember.btn[0]}</a>
          <button className="mbtn" onClick={mobileMenu}></button>
        </div>

        <div className="mobile_menu">
          <button className="cbtn" onClick={mobileMenu}></button>
          <div class="sub">
            {headerMenu.map((txt) => (
              <HeaderInfo menu={txt.menu} key={txt.menu} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
