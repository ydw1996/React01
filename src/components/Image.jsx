import React from "react";

function Image(prps) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${prps.skill[0]} ${prps.skill[1]}`}
    >
      <h2>Seoul, A Modern And Traditional City</h2>
      <p>Seoul is a beautiful city where modernity and tradition coexist.</p>
      <div className="image__inner container">
        <article className="image img1">
          <h3 className="image__title">Modern</h3>
          <p className="image__desc">
            A City of Modern Buildings, Design, and Trends Enjoy K-pop, Movies,
            and Food
          </p>
          <a className="image__btn" href="/">
            Touring
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">Traditional</h3>
          <p className="image__desc">
            A City With History nd Tradition Enjoy Cultural Properties, Natural
            Scenery and Food
          </p>
          <a className="image__btn yellow" href="/">
            Touring
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
