import React from "react";

function Text(prps) {
  return (
    <section
      id="textType"
      className={`text__wrap ${prps.fonts[0]} ${prps.fonts[1]}`}
    >
      <h2 className="mb50">Another attraction of Seoul</h2>
      <div className="text__inner container">
        <div className="text t1">
          <h3 className="text__title">Museum</h3>
          <p className="text__desc">
            The Seoul Museum of History takes you on a journey— a journey
            through time, rather than space. It is where you can explore the
            timeline of Seoul—from its birth to its reputation as a global
            city—and see what changes it underwent that made it the city as what
            we know now, and imagine how the city will change in the future.
          </p>
          <a className="text__btn" href="/">
            Learn More
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">News</h3>
          <p className="text__desc">
            South Korea has been carving itself a reputation as the culture
            generator that all Asian young people idolize—not to mention, a
            large constituency of clued-in beauty-driven Westerners. Visiting
            the home of K-pop and K-beauty for Seoul Fashion{" "}
          </p>
          <a className="text__btn" href="/">
            Learn More
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">E-Sport</h3>
          <p className="text__desc">
            The Korean gaming culture has turned Esports in Korea into an
            organized structure partnered with some of the biggest corporations
            in Korea. South Korea now has the top Esports ecosystems in the
            world.
          </p>
          <a className="text__btn" href="/">
            Learn More
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">SNS</h3>
          <p className="text__desc">
            A mobile marketing company Mobidays conducted a survey based on data
            from AppApe on June 21. The data showed that Band recorded the
            highest monthly active users from January to May this year among all
            social networking applications, followed by Facebook, Instagram,
            Kakaostory and Twitter.
          </p>
          <a className="text__btn" href="/">
            Learn More
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">Sharing</h3>
          <p className="text__desc">
            Seoul proclaimed its Sharing City Seoul Project in 2012. It is seen
            as social innovation measures that have been designed to create new
            economic
          </p>
          <a className="text__btn" href="/">
            Learn More
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">Seoul Pay</h3>
          <p className="text__desc">
            As a new civic life platform in Seoul, you can purchase and use
            Seoul Love Gift Certificates, apply for and inquire Seoul Love Gift
            Certificate merchants, as well as pay and use policy allowances for
            Seoul and autonomous districts.
          </p>
          <a className="text__btn" href="/">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
