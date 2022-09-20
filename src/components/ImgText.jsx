import React from "react";

const desc = {
  h3: ["Seoul Fashion Week"],
  p: [
    "Seoul's fashion is a beautiful city where modernity and tradition coexist. Enjoy the soulful fashion show in Seoul.",
  ],
};

function ImgTextInfo(imgtxt) {
  return (
    <li>
      <a href="/">{imgtxt.desc}</a>
    </li>
  );
}

function ImgInfo(imgtxt) {
  return (
    <div className={imgtxt.class}>
      <a href="/" className={imgtxt.class2}>
        {imgtxt.a}
      </a>
    </div>
  );
}

const ImageText_list = [
  { desc: "DDP Seoul Fashion Week" },
  { desc: "5 Designers to Know From Seoul Fashion Week Fall 2022" },
  { desc: "5 Designers to Know From Seoul Fashion Week Fall 2021" },
  { desc: "The 5 Designers to Know From Seoul Fashion Week Spring 2020" },
  { desc: "Hanbok Tradition, and #MeToo Surfaced at Seoul Fashion Week" },
];

const imgText__img = [
  { class: "imgText__img img1", a: "Hanbok" },
  { class: "imgText__img img2", a: "K-Fashion", class2: "blue" },
];

function ImgText(prps) {
  return (
    <section
      id="imgTextType"
      className={`imgtext__wrap ${prps.fonts[0]} ${prps.fonts[1]} ${prps.fonts[2]}`}
    >
      <div className="imgText__inner container">
        <div className="imgText__txt">
          <h3 className="title">{desc.h3[0]}</h3>
          <p className="desc">{desc.p[0]}</p>
          <ul className="list">
            {ImageText_list.map((txt) => (
              <ImgTextInfo desc={txt.desc} key={txt.desc} />
            ))}
          </ul>
        </div>
        <div className="imgText__img">
          {imgText__img.map((txt) => (
            <ImgInfo
              class={txt.class}
              a={txt.a}
              class2={txt.class2}
              key={txt.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImgText;
