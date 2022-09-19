import { ArrowBack, GitHub } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SingleProject({ title, skill, git, demo, img }) {
  // const navigate = useNavigate();
  const [Project, setProject] = useState(false);

  return (
    <>
      {Project === true ? (
        <div className="Open_project">
          <div className="open_box">
            <h1 className="text_title open_title">{title}</h1>

            <div className="open_img">
              <a href={demo} target={"_blank"}>
                <img src={img} alt="" />
              </a>
              <span className="clickme">Click Me</span>
            </div>
            <div className="open_skills ">
              <h1 className="text_title">
                skills : <span className="text o_text ">{skill}</span>
              </h1>
            </div>
            <div className="project_links text_title">
              <a href={git} target={"_blank"}>
                <GitHub />
              </a>

              <div
                className="Project_back"
                onClick={() => {
                  setProject(false);
                }}
              >
                <ArrowBack />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="project_box"
          onClick={() => {
            setProject(true);
          }}
        >
          <div className="single_Project_container">
            <img src={img} alt="" />
            <h1 className="text_title">{title}</h1>
          </div>
        </div>
      )}
    </>
  );
}
