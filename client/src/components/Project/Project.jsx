import { Grid } from "@mui/material";
import React from "react";
import "./projects.css";
import SingleProject from "./SingleProject";
import { getproject } from "../api/api";
import { useState, useEffect } from "react";
import { Lodder } from "../../context/Lodder";
export default function Project() {
  const [project, setproject] = useState([]);
  const { setLodder } = Lodder();

  const fetchproject = async () => {
    setLodder(true);
    try {
      const data = await getproject();
      setproject(data.reverse());
    } catch (error) {
      console.log(error.message);
      alert("network issue plz refres");
    }
    setLodder(false);
  };
  useEffect(() => {
    fetchproject();
  }, []);

  return (
    <>
      <div className="Project_container tab_container">
        <div className="project_title">
          <h1>persnol projects</h1>
        </div>
        <div className="Project_Grid">
          <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
            {project.map(({ name, skill, git, demo, img }) => {
              return (
                <Grid item xs={4}>
                  <SingleProject
                    title={name}
                    skill={skill}
                    git={git}
                    img={img}
                    demo={demo}
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
