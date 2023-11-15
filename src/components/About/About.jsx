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
                      My specialization is backend Devlopment nodejs.
                      <br />
                      I have 1 year experience in back-end development as an
                      intern and have been coding for the past couple of years,
                      and developed a strong skillset in Node js , API
                      Development , MongoDB , MySQL ,PHP.
                      <br />
                      I am also proficient in React Js , Tailwind , API
                      integration.
                      <br />I have a deep understanding of how to create
                      responsive and user-friendly webpages that are both
                      visually appealing and easy to use
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
