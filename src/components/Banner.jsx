import React from "react";

const desc = {
  title: ["I SEOUL U"],
  desc: ["Seoul is always waiting"],
};

function Banner(prps) {
  return (
    <section id="bannerType" className={`banner__wrap ${prps.fonts}`}>
      <div className="banner__inner">
        <h3 className="title">{desc.title[0]}</h3>
        <p className="desc">{desc.desc[0]}</p>
      </div>
    </section>
  );
}

export default Banner;
