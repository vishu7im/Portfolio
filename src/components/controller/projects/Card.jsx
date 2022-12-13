import React from "react";
import { useState } from "react";
import axios from "axios";
import "./card.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Lodder } from "../../../context/Lodder";

export default function Card({
  _id,
  title,
  update,
  skill,
  input,
  git,
  demo,
  img,
  fetch,
  setid,
}) {
  const { setLodder } = Lodder();

  const deleteproject = (id) => {
    setLodder(true);
    const url = `${process.env.REACT_APP_MY_API_KEY}/project/${id}`;
    try {
      axios.delete(url);
      alert("deleted");
    } catch (error) {
      alert("errr");
    }

    fetch();
    setLodder(false);
  };

  const makeupdate = () => {
    setLodder(true);
    update(true);
    input({
      name: title,
      skill: skill,
      git: git,
      demo: demo,
    });
    setid(_id);
    setLodder(false);
  };
  return (
    <div className="card">
      <div className="card_box">
        <div className="curd">
          <div
            onClick={() => {
              deleteproject(_id);
            }}
          >
            <DeleteForeverIcon />
          </div>
          <div
            onClick={() => {
              makeupdate();
            }}
          >
            <EditIcon />
          </div>
        </div>
        <img src={img} alt="" />
        <h1 className="card_title">{title}</h1>
      </div>
    </div>
  );
}
