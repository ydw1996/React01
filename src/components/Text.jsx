import React from "react";

const desc = {
  title: ["Another attraction of Seoul"],
};

function TextInfo(text) {
  return (
    <div className={text.class}>
      <h3 className="text__title">{text.title}</h3>
      <p className="text__desc">{text.desc}</p>
      <a className="text__btn" href="/">
        Learn More
      </a>
    </div>
  );
}

const text_inner = [
  {
    class: "text t1",
    title: "Museum",
    desc: "The Seoul Museum of History takes you on a journey— a journe through time, rather than space. It is where you can explore the",
  },
  {
    class: "text t2",
    title: "News",
    desc: "South Korea has been carving itself a reputation as the culture generator that all Asian young people ",
  },
  {
    class: "text t3",
    title: "E-Sport",
    desc: "The Korean gaming culture has turned Esports in Korea into an organized structure partnered with some of the biggest",
  },
  {
    class: "text t4",
    title: "SNS",
    desc: "A mobile marketing company Mobidays conducted a survey based on data from AppApe on June 21. The data showed that ",
  },
  {
    class: "text t5",
    title: "Sharing",
    desc: "Seoul proclaimed its Sharing City Seoul Project in 2012. It is seen as social innovation measures that have been designed",
  },
  {
    class: "text t6",
    title: "Seoul Pay",
    desc: "TAs a new civic life platform in Seoul, you can purchase and use Seoul Love Gift Certificates,  apply for and inquire Seoul Love",
  },
];

function Text(prps) {
  return (
    <section
      id="textType"
      className={`text__wrap ${prps.fonts[0]} ${prps.fonts[1]}`}
    >
      <h2 className="mb50">{desc.title[0]}</h2>
      <div className="text__inner container">
        {text_inner.map((txt) => (
          <TextInfo
            class={txt.class}
            title={txt.title}
            desc={txt.desc}
            key={txt.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Text;
