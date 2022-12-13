import "./skills.css";
import { getskill } from "../api/api";
import React, { useEffect, useState } from "react";
import { Lodder } from "../../context/Lodder";

export default function Skills() {
  const { setLodder } = Lodder();

  const [skill, setskill] = useState([]);
  const fetch = async () => {
    setLodder(true);
    try {
      const data = await getskill();
      setskill(data);
    } catch (error) {
      console.log(error);
    }

    setLodder(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="skill_container">
      <div className="Skills_heading ">
        <p>skills</p>
      </div>
      {skill.map(({ name, skill }) => {
        return (
          <div className="sectionFlex">
            <section className="skillSection">
              <h1>{name}</h1>
              <span className="skills">{skill}</span>
            </section>
          </div>
        );
      })}
    </div>
  );
}
