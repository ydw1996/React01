import React from "react";

function FooterInfo(footer) {
  return (
    <div>
      <h3>{footer.title}</h3>
      <ul>
        <li>
          <a href="/">{footer.desc}</a>
        </li>
        <li>
          <a href="/">{footer.desc2}</a>
        </li>
        <li>
          <a href="/">{footer.desc3}</a>
        </li>
        <li>
          <a href="/">{footer.desc4}</a>
        </li>
      </ul>
    </div>
  );
}

const footer_menu = [
  {
    title: "Traffic",
    desc: "Subway",
    desc2: "Tourist Bus",
    desc3: "Seoul Taxi",
    desc4: "Seoul Bicycle",
  },
  {
    title: "A Theme Park",
    desc: "Everland",
    desc2: "Lotte World",
    desc3: "Seoul Grand Park",
    desc4: "Seoul World",
  },
  {
    title: "Museum",
    desc: "A Museum Of History",
    desc2: "National Museum",
    desc3: "Museum of Life History",
    desc4: "Seoul Arboretum",
  },
  {
    title: "Tourist Attraction",
    desc: "Gyeongbokgung",
    desc2: "DDP Plaza",
    desc3: "Cheonggyecheon",
    desc4: "The Namsan Tower",
  },
  {
    title: "Medical Tourism",
    desc: "Dermatology",
    desc2: "Health care",
    desc3: "Advanced Medical Services",
  },
  {
    title: "Language",
    desc: "English",
    desc2: "Chinese",
    desc3: "Japanese",
    desc4: "Other Languages",
  },
];

const footer = {
  port: ["2022 David Yang. Portfolio", "All rights reserved."],
};

function Footer(prps) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${prps.fonts[0]} ${prps.fonts[1]} ${prps.fonts[2]}`}
    >
      <div className="footer__inner container">
        <div className="footer__menu">
          {footer_menu.map((txt) => (
            <FooterInfo
              title={txt.title}
              desc={txt.desc}
              desc2={txt.desc2}
              desc3={txt.desc3}
              desc4={txt.desc4}
              key={txt.footer}
            />
          ))}
        </div>
        <div className="footer__right">
          {footer.port[0]}
          <br />
          {footer.port[1]}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
