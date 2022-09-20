import React from "react";

const desc = {
  h2: ["Seoul, A Modern And Traditional City"],
  p: ["Seoul is a beautiful city where modernity and tradition coexist."],
};

function ImageInfo(img) {
  return (
    <article className={img.class_img}>
      <h3 className="image__title">{img.title}</h3>
      <p className="image__desc">{img.desc}</p>
      <a className={img.class_btn} href="/">
        Touring
      </a>
    </article>
  );
}

const Image__inner = [
  {
    class_img: "image img1",
    title: "Modern",
    desc: "A City of Modern Buildings, Design, and Trends Enjoy K-pop, Movies,and Food",
    class_btn: "image__btn",
  },
  {
    class_img: "image img2",
    title: "Traditional",
    desc: "A City With History nd Tradition Enjoy Cultural Properties, Natura Scenery and Food",
    class_btn: "image__btn yellow",
  },
];

function Image(prps) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${prps.skill[0]} ${prps.skill[1]}`}
    >
      <h2>{desc.h2[0]}</h2>
      <p>{desc.p[0]}</p>
      <div className="image__inner container">
        {Image__inner.map((txt) => (
          <ImageInfo
            class_img={txt.class_img}
            title={txt.title}
            desc={txt.desc}
            class_btn={txt.class_btn}
            key={txt.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
