import React from "react";

const desc = {
  h2: ["A City Of Culture"],
  p: ["Feel the charm of Seoul with its diverse culture, food, and nature"],
};

function CardInfo(card) {
  return (
    <article className="card">
      <figure className="card__header">
        <img src={card.img} alt={card.alt} />
      </figure>
      <div className="card__body">
        <h3 className="tit">{card.tit}</h3>
        <p className="desc">{card.desc}</p>
        <a className="btn" href="/">
          View More
          <span aria-hidden="true">
            <svg
              width="52"
              height="8"
              viewBox="0 0 52 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                fill="#5B5B5B"
              />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
}

const card__inner = [
  {
    img: "assets/img/card_bg01.jpg",
    alt: "K-POP카드",
    tit: "K-pop",
    desc: "Bangtan Boys, is a South Korean boy band formed in 2010 and debuting in 2013 under Big Hit Entertainment. Theseptet—consisting of members ",
  },
  {
    img: "assets/img/card_bg02.jpg",
    alt: "Korean Food 카드",
    tit: "Korean Food",
    desc: "K-food refers to the Korean food which has been made by the Korean recipe and favored by foreign celebrities and common people.",
  },
  {
    img: "assets/img/card_bg03.jpg",
    alt: "K-Nature 카드",
    tit: "Korean Natur",
    desc: "Bukhansan National Park has numerous ridges and valleys, so it isalways new even if you go up and down throughout the year.",
  },
];

function Card(prps) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${prps.fonts[0]} ${prps.fonts[1]} `}
    >
      <h2>{desc.h2[0]}</h2>
      <p>{desc.p[0]}</p>
      <div className="card__inner container">
        {card__inner.map((txt) => (
          <CardInfo
            img={txt.img}
            alt={txt.alt}
            tit={txt.tit}
            desc={txt.desc}
            key={txt.card}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
