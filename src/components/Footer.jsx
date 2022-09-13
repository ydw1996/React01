import React from "react";

function Footer(prps) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${prps.fonts[0]} ${prps.fonts[1]} ${prps.fonts[2]}`}
    >
      <h2 className="blind">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          <div>
            <h3>Traffic</h3>
            <ul>
              <li>
                <a href="/">Subway</a>
              </li>
              <li>
                <a href="/">Tourist Bus</a>
              </li>
              <li>
                <a href="/">Seoul Taxi</a>
              </li>
              <li>
                <a href="/">Seoul Bicycle</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>A Theme Park</h3>
            <ul>
              <li>
                <a href="/">Everland</a>
              </li>
              <li>
                <a href="/">Lotte World</a>
              </li>
              <li>
                <a href="/">Seoul Grand Park</a>
              </li>
              <li>
                <a href="/">Lotte World</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Museum</h3>
            <ul>
              <li>
                <a href="/">A Museum Of History</a>
              </li>
              <li>
                <a href="/">National Museum</a>
              </li>
              <li>
                <a href="/">Museum of Life History</a>
              </li>
              <li>
                <a href="/">Seoul Arboretum</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Tourist Attraction</h3>
            <ul>
              <li>
                <a href="/">Gyeongbokgung</a>
              </li>
              <li>
                <a href="/">DDP Plaza</a>
              </li>
              <li>
                <a href="/">Cheonggyecheon</a>
              </li>
              <li>
                <a href="/">The Namsan Tower</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Medical Tourism</h3>
            <ul>
              <li>
                <a href="/">Dermatology</a>
              </li>
              <li>
                <a href="/">Health care</a>
              </li>
              <li>
                <a href="/">Advanced Medical Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Language</h3>
            <ul>
              <li>
                <a href="/">English</a>
              </li>
              <li>
                <a href="/">Chinese</a>
              </li>
              <li>
                <a href="/">Japanese</a>
              </li>
              <li>
                <a href="/">Other Languages</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2022 David Yang. Portfolio
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
