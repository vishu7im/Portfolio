import React, { useState } from "react";
import "./about.css";
import { Lodder } from "../../context/Lodder";
import { getprofile } from "../api/api";
import { useEffect } from "react";

export default function About() {
  const { setLodder } = Lodder();
  const [data, setdata] = useState([]);
  const fetch = async () => {
    setLodder(true);
    try {
      const result = await getprofile();
      setdata(result);
    } catch (error) {
      console.log(error);
    }

    setLodder(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="tab_container body">
        <div className="container_about">
          <div className="circles"></div>
          {data.map(({ img, about }) => {
            return (
              <div className="details-container">
                <div className="avatar">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="about">
                  <div className="name">
                    <p>Hello There!</p>
                    <h2>I'm vishal,</h2>
                  </div>
                  <div className="about-content">
                    <p>
                      Looking for a top-rated full stack Web developer with a
                      lifelong passion for the Web? <br /> You’ve come to the
                      “write” place! website is my day job, my hustle, and my
                      hobby.
                      <br />
                      -Extensive knowledge of advanced Web Development topics,
                      such as Backends, Databases, and React js.
                      <br /> Basically MERN stack devlopment.
                      <br />
                      Think I’m the perfect fit for your project? <br /> Just
                      send me a message. Thanks for reading, and I look forward
                      to (hopefully) working with you
                    </p>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
