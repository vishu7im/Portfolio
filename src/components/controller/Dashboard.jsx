import React from "react";
import Projects from "./projects/Projects";
import "./dashboard.css";
import project from "./assest/project.png";
import skill from "./assest/skills.png";
import exp from "./assest/experience.png";
import about from "./assest/about.png";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import Skill from "./skill/Skill";
import Exp from "./exp/Exp";
import About from "./about/About";
import { getprofile } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Lodder } from "../../context/Lodder";
export default function Dashboard() {
  const { setLodder } = Lodder();
  const navigate = useNavigate();
  const [user, setuser] = useState(false);
  const [navigation, setnavigation] = useState("skill");
  const [profile, setprofile] = useState("");
  const fetch = async () => {
    try {
      setLodder(true);
      const data = await getprofile();
      setprofile(data[0].img);
    } catch (error) {
      console.log(error);
    }
    setLodder(false);
  };

  const usernav = () => {
    switch (navigation) {
      case "project":
        // code block
        return <Projects />;

      case "exp":
        // code block
        return <Exp />;

      case "skill":
        // code block
        return <Skill />;

      case "about":
        // code block
        return <About />;
    }
  };

  const logout = () => {
    setLodder(true);

    localStorage.removeItem("user");
    navigate("/login");
    setLodder(false);
  };
  const auth = () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (!auth) {
      navigate("/login");
    } else {
      fetch();
    }
  };
  useEffect(() => {
    auth();
  }, []);

  const changepwd = () => {
    navigate("/change");
  };

  return (
    <div className="dashboard_container tab_container ">
      <div className="dashforms">{usernav()}</div>

      <div
        className="admin_user"
        onClick={() => {
          setuser(!user);
        }}
      >
        <Avatar src={profile} />
      </div>

      <div className={`${user === true ? "admin" : "adminnot"} mobile_admin`}>
        <div className="test">
          <div
            className="project_title admin_section  "
            onClick={() => {
              setnavigation("project");
            }}
          >
            <img src={project} alt="" />
          </div>

          <div
            className="project_title admin_section "
            onClick={() => {
              setnavigation("skill");
            }}
          >
            <img src={skill} alt="" />
          </div>
          <div
            className="project_title admin_section "
            onClick={() => {
              setnavigation("exp");
            }}
          >
            <img src={exp} alt="" />
          </div>
          <div
            className="project_title admin_section "
            onClick={() => {
              setnavigation("about");
            }}
          >
            <img src={about} alt="" />
          </div>

          <div className="auth">
            <button className="logout" onClick={logout}>
              logout
            </button>
          </div>
          <div className="auth">
            <button className="change" onClick={changepwd}>
              change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
