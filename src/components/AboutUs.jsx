import React from "react";
import Heading from "../common/heading/Heading";
import Back from "../common/back/Back";
import "./AboutUs.css";

const AboutUs = () => {
  // Placeholder content for now
  const homeAbout = [
    { cover: "", title: "", desc: "" },
    { cover: "", title: "", desc: "" },
    { cover: "", title: "", desc: "" }
  ];

  const awrapper = [
    { cover: "", data: "", title: "" },
    { cover: "", data: "", title: "" },
    { cover: "", data: "", title: "" }
  ];

  return (
    <>
      <Back title="About Us" />
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="About" />
          </div>
          <div className="right row">
            <Heading subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
            <div className="items">
              {homeAbout.map((val, index) => (
                <div className="item flexSB" key={index}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="awrapper">
        <div className="container grid">
          {awrapper.map((val, index) => (
            <div className="box flex" key={index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
