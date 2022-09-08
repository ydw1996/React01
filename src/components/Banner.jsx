import React from "react";

function Banner(prps) {
  return (
    <section id="bannerType" className={`banner__wrap ${prps.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">I SEOUL U</h3>
        <p className="desc">Seoul is always waiting</p>
      </div>
    </section>
  );
}

export default Banner;
