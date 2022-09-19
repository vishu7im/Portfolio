import { ArrowDownwardSharp, WhatsApp } from "@mui/icons-material";
import React from "react";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Reddit,
  Twitter,
} from "@mui/icons-material";
import { getprofile } from "../api/api";

import "./Home.css";
import Skills from "./Skills";
import { useState } from "react";
import { useEffect } from "react";
import { Lodder } from "../../context/Lodder";

export default function Home() {
  const { setLodder } = Lodder();
  const [CV, setCV] = useState("");
  const fetch = async () => {
    try {
      setLodder(true);
      const data = await getprofile();
      setCV(data[0].cv);
    } catch (error) {
      console.log(error.msg);
    }
    setLodder(false);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="Home_container">
        <div className="home_heading">
          <div className="home_title_box">
            <div>
              <h1 className="title animate-charcter">
                hii , my name is Vishal
              </h1>
            </div>
            <div>
              <h1 className="Home_about">
                <span className="text">A </span>
                <span className="text">web-devloper</span>
                <span className="text">with </span>
                <span className="text">passion </span>
                <span className="text">for </span>
                <span className="text">learning </span>
                <span className="text">and </span>
                <span className="text">creating .</span>
              </h1>
            </div>

            <div className="footer_link home_link">
              <li>
                <a href="https://www.instagram.com/_vi.shu/" target={"_blank"}>
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="https://github.com/vishu7im" target={"_blank"}>
                  <GitHub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vishal-munday-869024223"
                  target={"_blank"}
                >
                  {" "}
                  <LinkedIn />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+918570090556" target={"_blank"}>
                  <WhatsApp />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/vishu7im">
                  <Twitter />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="download">
          <a href={CV} attributes-list download="resume">
            <div className="CV">
              <p> Download CV</p>{" "}
            </div>
          </a>
        </div>
        <div className="scroll">
          <div className="scroll_in">
            <div class="waviy">
              <span>S</span>
              <span>C</span>
              <span>R</span>
              <span>O</span>
              <span>L</span>
              <span>L</span>
            </div>

            <ArrowDownwardSharp />
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
}
