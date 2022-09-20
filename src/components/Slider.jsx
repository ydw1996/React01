import React from "react";

const desc = {
  span: ["KOREA"],
  h3: ["SEOUL"],
  p: ["Welcome to Seoul, the capital of Korean culture", "안녕하세요"],
};

const btn = {
  btn: ["LEARN MORE", "VIEW SITE"],
};

function SliderInfo(dot) {
  return (
    <a href="/" className={dot.class}>
      <span className="ir">{dot.dot}</span>
    </a>
  );
}
const slider__arrow = [
  { class: "left", dot: "이전 이미지" },
  { class: "right", dot: "다음 이미지" },
];

const slider__dot = [
  { class: "dot activ", dot: "1" },
  { class: "dot", dot: "2" },
  { class: "dot", dot: "3" },
  { class: "play", dot: "플레이" },
  { class: "stop", dot: "정지" },
];

function Slider(prps) {
  return (
    <section id="sliderType" className={`slider__wrap ${prps.fonts}`}>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>{desc.span[0]}</span>
              <h3>{desc.h3[0]}</h3>
              <p>
                {desc.p[0]}
                <br />
                {desc.p[1]}
              </p>
              <div className="btn">
                <a href="/">{btn.btn[0]}</a>
                <a href="/" className="black">
                  {btn.btn[1]}
                </a>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            {slider__arrow.map((txt) => (
              <SliderInfo dot={txt.dot} class={txt.class} key={txt.dot} />
            ))}
          </div>
          <div className="slider__dot">
            {slider__dot.map((txt) => (
              <SliderInfo dot={txt.dot} class={txt.class} key={txt.dot} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
