import React from "react";

function Slider(prps) {
  return (
    <section id="sliderType" className={`slider__wrap ${prps.fonts}`}>
      <h2 className="blind">슬라이드 유형</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>Korea</span>
              <h3>SEOUL</h3>
              <p>
                Welcome to Seoul, the capital of Korean culture
                <br />
                안녕하세요
              </p>
              <div className="btn">
                <a href="/">LEARN MORE</a>
                <a href="/" className="black">
                  VIEW SITE
                </a>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            <a href="/" className="left">
              <span className="ir">이전 이미지</span>
            </a>
            <a href="/" className="right">
              <span className="ir">다음 이미지</span>
            </a>
          </div>
          <div className="slider__dot">
            <a href="/" className="dot active">
              <span className="ir">1</span>
            </a>
            <a href="/" className="dot">
              <span className="ir">2</span>
            </a>
            <a href="/" className="dot">
              <span className="ir">3</span>
            </a>
            <a href="/" className="play">
              <span className="ir">플레이</span>
            </a>
            <a href="/" className="stop">
              <span className="ir">정지</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
