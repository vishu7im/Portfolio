import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getskill } from "../../api/api";
import Card from "./Card";
import { Lodder } from "../../../context/Lodder";

export default function Skill() {
  const [update, setupdate] = useState(false);
  const { lodder, setLodder } = Lodder();

  const [skilldata, setskilldata] = useState({
    name: "",
    skill: "",
  });

  const skillinput = (e) => {
    const { name, value } = e.target;
    setskilldata({ ...skilldata, [name]: value });
  };
  const setskill = () => {
    setLodder(true);
    const { name, skill } = skilldata;
    const url = `${process.env.REACT_APP_MY_API_KEY}/skills`;
    try {
      axios.post(url, { name, skill });
      setskilldata({
        name: "",
        skill: "",
      });

      alert("skill upload ");
    } catch (error) {
      alert("error ");
    }

    setLodder(false);
    fetch();
  };

  const [skill, setSkill] = useState([]);
  const fetch = async () => {
    setLodder(true);
    try {
      const data = await getskill();
      setSkill(data);
    } catch (error) {
      console.log(error);
    }
    setLodder(false);
  };

  useEffect(() => {
    fetch();
  }, []);
  const [id, setid] = useState("");
  const makeChange = async () => {
    setLodder(true);
    const { name, skill } = skilldata;
    const url = `${process.env.REACT_APP_MY_API_KEY}/skill`;
    try {
      axios.post(url, { name, skill, id });
      alert("skills Update");
      setskilldata({
        name: "",
        skill: "",
      });
      setupdate(false);
      fetch();
    } catch (error) {
      alert("err");
    }
    setLodder(false);
  };

  return (
    <>
      <div className="form">
        <div className="form_box">
          <div class="segment skillSection">
            <h1>Skills </h1>
          </div>

          <label className={"lable"}>
            <input
              className="input"
              type="text"
              name="name"
              value={skilldata.name}
              onChange={skillinput}
              placeholder={"Heading "}
            />
          </label>
          <label className={"lable"}>
            <input
              className="input"
              type="text"
              id=""
              name="skill"
              value={skilldata.skill}
              onChange={skillinput}
              placeholder={"Skills"}
            />
          </label>

          <div className="_btn">
            <div className="">
              {update === true ? (
                <button
                  type="button"
                  className="icon ion-md-lock btn "
                  disabled={lodder}
                  onClick={() => {
                    makeChange();
                  }}
                >
                  update
                </button>
              ) : (
                <button
                  type="button"
                  className="icon ion-md-lock btn "
                  disabled={lodder}
                  onClick={() => {
                    setskill();
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="Card_flex  ">
        <div className="card_conainer">
          <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
            {skill.map(({ name, _id, skill }) => {
              return (
                <Grid item xs={4}>
                  <Card
                    name={name}
                    id={_id}
                    skill={skill}
                    setid={setid}
                    setupdate={setupdate}
                    input={setskilldata}
                    fetch={fetch}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}
