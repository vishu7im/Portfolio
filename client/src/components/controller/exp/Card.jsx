import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";

export default function Card({
  index,
  toggal,
  name,
  about,
  start,
  end,
  setid,
  id,
  input,
  fetch,
}) {
  const updatedata = () => {
    toggal(true);
    setid(id);
    input({ name, about, start, end });
  };

  const deletedata = () => {
    const url = `${process.env.REACT_APP_MY_API_KEY}/experience/${id}`;
    try {
      axios.delete(url);
      alert("deleted");
      fetch();
    } catch (error) {
      alert("errr");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card_box">
          <div className="curd">
            <div onClick={deletedata}>
              <DeleteForeverIcon />
            </div>
            <div onClick={updatedata}>
              <EditIcon />
            </div>
          </div>
          <h1 className="card_title">{index}</h1>
        </div>
      </div>
    </>
  );
}
