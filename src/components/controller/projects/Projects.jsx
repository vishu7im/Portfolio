import React, { useState, useEffect } from "react";
import axios from "axios";
import FileBase from "react-file-base64";
import { getproject } from "../../api/api";
import { Grid } from "@mui/material";

import "./project.css";
import Card from "./Card";
import { Lodder } from "../../../context/Lodder";

export default function Projects() {
  const [id, setid] = useState("");
  const [update, setupdate] = useState(false);
  const [project, setprojectinput] = useState({
    name: "",
    skill: "",
    git: "",
    demo: "",
    img: "",
  });
  const { lodder, setLodder } = Lodder();
  const [Data, setdata] = useState([]);

  const fetchproject = async () => {
    setLodder(true);
    try {
      const data = await getproject();
      setdata(data);
    } catch (error) {
      console.log(error);
    }
    setLodder(false);
  };

  useEffect(() => {
    fetchproject();
  }, []);

  const setprojectdata = (e) => {
    const { name, value } = e.target;
    setprojectinput({ ...project, [name]: value });
  };

  const setproject = async () => {
    setLodder(true);
    const { name, skill, git, demo, img } = project;
    if (!name || !skill || !git || !demo || !img) {
      return alert("fill the form ");
    }
    const url = `${process.env.REACT_APP_MY_API_KEY}/project`;
    console.log(name, skill, git, demo, img);
    try {
      const data = await axios.post(url, { name, skill, git, demo, img });
      setprojectinput({
        name: "",
        skill: "",
        git: "",
        demo: "",
        img: "",
      });
      alert("upload");
    } catch (error) {
      alert("error ");
    }

    fetchproject();
    setLodder(false);
  };

  const makeChange = async () => {
    setLodder(true);
    const { name, skill, git, demo } = project;
    const url = `${process.env.REACT_APP_MY_API_KEY}/projects`;
    try {
      const data = await axios.post(url, { name, skill, git, demo, id });
      setprojectinput({
        name: "",
        skill: "",
        git: "",
        demo: "",
        img: "",
      });
      alert("update ");
    } catch (error) {
      alert("error ");
    }

    fetchproject();
    setupdate(false);
    setLodder(false);
  };

  return (
    <>
      <div className="form">
        <div className="form_box">
          <div class="segment skillSection">
            <h1>project</h1>
          </div>

          <label className={"lable"}>
            <input
              className="input"
              type="text"
              name="name"
              onChange={setprojectdata}
              value={project.name}
              placeholder={"Project Name "}
            />
          </label>
          <label className={"lable"}>
            <input
              className="input"
              type="url"
              id=""
              name="git"
              onChange={setprojectdata}
              value={project.git}
              placeholder={"Github Url"}
            />
          </label>
          <label className={"lable"}>
            {" "}
            <input
              className="input"
              type="url"
              name="demo"
              onChange={setprojectdata}
              value={project.demo}
              placeholder={"Project url "}
            />
          </label>
          <label className={"lable"}>
            {" "}
            <input
              className="input"
              type="text"
              name="skill"
              onChange={setprojectdata}
              value={project.skill}
              placeholder={"Skills "}
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
                  Update
                </button>
              ) : (
                <button
                  type="button"
                  className="icon ion-md-lock btn "
                  disabled={lodder}
                  onClick={() => {
                    setproject();
                  }}
                >
                  Submit
                </button>
              )}
            </div>
            <div>
              <FileBase
                className={"filebase"}
                multiple={false}
                onDone={({ base64 }) => {
                  setprojectinput({ ...project, img: base64 });
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Card_flex  ">
        <div className="card_conainer">
          <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Data.map(({ _id, name, skill, git, demo, img }) => {
              return (
                <Grid item xs={4}>
                  <Card
                    title={name}
                    skill={skill}
                    git={git}
                    img={img}
                    demo={demo}
                    _id={_id}
                    fetch={fetchproject}
                    update={setupdate}
                    input={setprojectinput}
                    setid={setid}
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
