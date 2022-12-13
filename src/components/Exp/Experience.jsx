import React from "react";
import "./Experience.css";
import { getexperience } from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { Lodder } from "../../context/Lodder";

export default function Experience() {
  const { setLodder } = Lodder();

  const [data, setdata] = useState([]);
  const fetch = async () => {
    setLodder(true);

    try {
      const result = await getexperience();
      setdata(result.reverse());
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
      <div className="tab_container expeience_box">
        <div className="page-section">
          <div className="container_ex">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Experience & education
              </h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
            <ul className="timeline">
              {data.map(({ name, about, end, start }, i) => {
                return (
                  <li className={i % 2 === 0 ? "" : "timeline-inverted"}>
                    <div className="timeline-image"></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="subheading">{name}</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">{about}</p>
                      </div>
                      <div className="timeline-heading">
                        <h4>
                          {start}-{end}
                        </h4>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
