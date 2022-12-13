import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { getprofile } from "../api/api";
import { Lodder } from "../../context/Lodder";

export default function Navbar() {
  const { setLodder } = Lodder();
  const [profile, setprofile] = useState("");
  const fetch = async () => {
    setLodder(true);
    try {
      const data = await getprofile();
      setprofile(data[0].img);
    } catch (error) {
      console.log(error.message);
    }
    setLodder(false);
  };
  useEffect(() => {
    fetch();
  }, []);

  const [menuToggal, setMenuToggal] = useState(false);
  const navShow = {
    navoff: "links",
    navon: "links_ex",
  };

  const navigate = useNavigate();

  const hamburger = () => {
    setMenuToggal(!menuToggal);
  };
  return (
    <>
      <div className="Navbar_container">
        <div className="Navbar_logo">
          <Avatar
            onClick={() => {
              navigate("/about");
            }}
            src={profile}
          />
        </div>
        <div
          className={`${
            menuToggal === true ? navShow.navon : navShow.navoff
          } link_main`}
        >
          <NavLink
            className="Link_name"
            onClick={() => {
              setMenuToggal(false);
            }}
            to="/"
          >
            <p className="link">home</p>
          </NavLink>
          <NavLink
            className="Link_name"
            to="/project"
            onClick={() => {
              setMenuToggal(false);
            }}
          >
            <p className="link">project</p>
          </NavLink>
          <NavLink
            className="Link_name"
            to="/exerience"
            onClick={() => {
              setMenuToggal(false);
            }}
          >
            <p className="link">experience</p>
          </NavLink>
          <NavLink
            className="Link_name"
            to="/about"
            onClick={() => {
              setMenuToggal(false);
            }}
          >
            <p className="link">about</p>
          </NavLink>
        </div>
        <div
          className="Menu"
          onClick={() => {
            hamburger();
          }}
        >
          {/* Hamburger menue  */}
          <MenuIcon sx={{ fontSize: 50 }} />
        </div>
      </div>
    </>
  );
}
