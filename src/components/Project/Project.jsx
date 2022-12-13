import { Grid } from "@mui/material";
import React from "react";
import "./projects.css";
import SingleProject from "./SingleProject";
import { getproject } from "../api/api";
import { useState, useEffect } from "react";
import { Lodder } from "../../context/Lodder";
import Tost from "../Tost/Tost";
export default function Project() {
  const [project, setproject] = useState([]);
  const [open, setOpen] = React.useState(false);
  const { setLodder } = Lodder();

  const handleClick = () => {
    setOpen(true);
  };
  const fetchproject = async () => {
    setLodder(true);
    try {
      const data = await getproject();
      setproject(data.reverse());
      setLodder(false);
    } catch (error) {
      console.log(error.message);
      setLodder(true);
      handleClick();
    }
  };
  useEffect(() => {
    fetchproject();
  }, []);

  return (
    <>
      <div className="Project_container tab_container">
        <div className="project_title">
          <h1>personal projects</h1>
        </div>
        <Tost open={open} setOpen={setOpen} />
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
