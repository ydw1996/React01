import React from "react";

function Header(prps) {
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
        </div>
      </div>
    </header>
  );
}

export default Header;
