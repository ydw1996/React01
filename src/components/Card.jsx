import React from "react";

function Card(prps) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${prps.fonts[0]} ${prps.fonts[1]} `}
    >
      <h2>A City Of Culture</h2>
      <p>Feel the charm of Seoul with its diverse culture, food, and nature</p>
      <div className="card__inner container">
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01.jpg" alt="웹표준 사이트 만들기" />
          </figure>
          <div className="card__body">
            <h3 className="tit">K-pop</h3>
            <p className="desc">
              Bangtan Boys, is a South Korean boy band formed in 2010 and
              debuting in 2013 under Big Hit Entertainment. The
              septet—consisting of members Jin, Suga, J-Hope, RM, Jimin, V, and
              Jungkook—co-writes and co-produces much of their own material.
            </p>
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
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg02.jpg" alt="반응형 사이트 만들기" />
          </figure>
          <div className="card__body">
            <h3 className="tit">Korean Food</h3>
            <p className="desc">
              K-food refers to the Korean food which has been made by the Korean
              recipe and favored by foreign celebrities and common people. In
              February 2020, a very exotic food Jjapaguri was made publicized
              and getting popular around the world when Bong Joon-ho's cinema
              "Parasite" won four Academy Awards.
            </p>
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
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg03.jpg" alt="패랠렉스 사이트 만들기" />
          </figure>
          <div className="card__body">
            <h3 className="tit">Natur</h3>
            <p className="desc">
              Bukhansan National Park has numerous ridges and valleys, so it is
              always new even if you go up and down throughout the year. A
              variety of hiking courses are waiting for hikers, ranging from
              small trails to quiet hiking trails where Silgaecheon Stream
              flows, and rugged rocky courses.
            </p>
            <a className="btn" href="/">
              View More
              <span aria-hidden="true">
                <svg
                  width="52"
                  height="8"
                  ViewBox="0 0 52 8"
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
      </div>
    </section>
  );
}

export default Card;
