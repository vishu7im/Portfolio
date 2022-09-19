import React from "react";
import { useState } from "react";
import "./exp.css";
import axios from "axios";
import { useEffect } from "react";
import { getexperience } from "../../api/api";
import { Grid } from "@mui/material";
import Card from "./Card";
import { Lodder } from "../../../context/Lodder";

export default function Exp() {
  const [id, setid] = useState("");
  const [update, setUpdate] = useState(false);
  const [exinfo, setexinfo] = useState({
    name: "",
    about: "",
    start: "",
    end: "",
  });
  const handleonchange = (e) => {
    const { name, value } = e.target;
    setexinfo({ ...exinfo, [name]: value });
  };

  const uploaddata = () => {
    setLodder(true);

    const { name, about, start, end } = exinfo;
    if (!name || !about || !start || !end) {
      return alert("fill data ");
    }
    const url = `${process.env.REACT_APP_MY_API_KEY}/experience`;
    try {
      axios.post(url, { name, about, start, end });
      alert("uplod");
      setexinfo({
        name: "",
        about: "",
        start: "",
        end: "",
      });
    } catch (error) {
      alert("errr");
    }

    setLodder(false);
  };
  const { lodder, setLodder } = Lodder();

  const updatedata = () => {
    setLodder(true);
    const { name, about, start, end } = exinfo;
    if (!name || !about || !start || !end) {
      return alert("fill data ");
    }
    const url = `${process.env.REACT_APP_MY_API_KEY}/experiences`;
    try {
      axios.post(url, { name, about, start, end, id });
      setexinfo({
        name: "",
        about: "",
        start: "",
        end: "",
      });
      fetch();
      alert("update");
    } catch (error) {
      console.log("error");
    }
    setUpdate(false);
    setLodder(false);
  };

  const [data, setdata] = useState([]);
  const fetch = async () => {
    setLodder(true);
    try {
      const result = await getexperience();
      setdata(result);
    } catch (error) {
      console.log(error);
    }

    setLodder(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div className="form">
        <div className="form_box">
          <div class="segment skillSection">
            <h1>{"Experience"}</h1>
          </div>

          <label className={"lable"}>
            <input
              className="input"
              type="text"
              name="name"
              onChange={handleonchange}
              value={exinfo.name}
              placeholder={" Name "}
            />
          </label>
          <label className={"lable"}>
            <input
              className="input"
              type="url"
              id=""
              name="about"
              onChange={handleonchange}
              value={exinfo.about}
              placeholder={"type"}
            />
          </label>
          <label className={"lable"}>
            {" "}
            <input
              className="input"
              type="url"
              name="start"
              onChange={handleonchange}
              value={exinfo.start}
              placeholder={"start"}
            />
          </label>
          <label className={"lable"}>
            {" "}
            <input
              className="input"
              type="text"
              name="end"
              onChange={handleonchange}
              value={exinfo.end}
              placeholder={"end"}
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
                    updatedata();
                  }}
                >
                  Update
                </button>
              ) : (
                <button
                  type="button"
                  disabled={lodder}
                  className="icon ion-md-lock btn "
                  onClick={() => {
                    uploaddata();
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="Card_flex  ">
        <div className="card_conainer">
          <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data.map(({ name, about, start, end, _id }, i) => {
              return (
                <Grid item xs={4}>
                  <Card
                    index={i}
                    toggal={setUpdate}
                    name={name}
                    about={about}
                    start={start}
                    end={end}
                    input={setexinfo}
                    id={_id}
                    setid={setid}
                    fetch={fetch}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}
