import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import { Lodder } from "../../../context/Lodder";

export default function Card({
  name,
  setupdate,
  setid,
  input,
  id,
  skill,
  fetch,
}) {
  const { setLodder } = Lodder();
  const makeupdate = () => {
    setupdate(true);
    input({
      name: name,
      skill: skill,
    });
    setid(id);
  };

  const deleteproject = (id) => {
    setLodder(true);
    const url = `${process.env.REACT_APP_MY_API_KEY}/skills/${id}`;
    try {
      axios.delete(url);
      alert("deleted");
      fetch();
    } catch (error) {
      alert("err");
    }

    setLodder(false);
  };

  return (
    <>
      {" "}
      <div className="card">
        <div className="card_box">
          <div className="curd">
            <div
              onClick={() => {
                deleteproject(id);
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
          <h1 className="card_title">{name}</h1>
        </div>
      </div>
    </>
  );
}
