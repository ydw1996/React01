import React from "react";

function ImgText(prps) {
  return (
    <section
      id="imgTextType"
      className={`imgtext__wrap ${prps.fonts[0]} ${prps.fonts[1]} ${prps.fonts[2]}`}
    >
      <h2 className="blind">이미지 텍스트 유형</h2>
      <div className="imgText__inner container">
        <div className="imgText__txt">
          <h3 className="title">Seoul Fashion Week</h3>
          <p className="desc">
            Seoul's fashion is a beautiful city where modernity and tradition
            coexist. Enjoy the soulful fashion show in Seoul.
          </p>
          <ul className="list">
            <li>
              <a href="/">DDP Seoul Fashion Week</a>
            </li>
            <li>
              <a href="/">
                5 Designers to Know From Seoul Fashion Week Fall 2022
              </a>
            </li>
            <li>
              <a href="/">
                5 Designers to Know From Seoul Fashion Week Fall 2021
              </a>
            </li>
            <li>
              <a href="/">
                The 5 Designers to Know From Seoul Fashion Week Spring 2020
              </a>
            </li>
            <li>
              <a href="/">
                Hanbok Tradition, and #MeToo Surfaced at Seoul Fashion Week
              </a>
            </li>
          </ul>
        </div>
        <div className="imgText__img">
          <div className="imgText__img img1">
            <a href="/">Hanbok</a>
          </div>
          <div className="imgText__img img2">
            <a href="/" className="blue">
              K-Fashion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
