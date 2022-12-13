import React, { useState } from "react";
import "./login.css";
import { Lodder } from "../../context/Lodder";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Change() {
  const navigate = useNavigate();
  const [match, setMatch] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const { lodder, setLodder } = Lodder();
  const [inputdata, setInputdata] = useState({ opwd: "", pwd: "", rpwd: "" });
  const handle = (e) => {
    const { name, value } = e.target;

    setInputdata({ ...inputdata, [name]: value });
  };

  const auth = () => {
    if (!user) {
      navigate("/login");
    }
  };

  const checkpwd = () => {
    const { pwd, rpwd, opwd } = inputdata;

    if (!opwd || !pwd || !rpwd) {
      return setMatch(true);
    }

    if (pwd === rpwd && opwd !== pwd && opwd !== rpwd) {
      setMatch(true);
      console.log("pwd match ");
    } else {
      console.log("not match");
      setMatch(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      checkpwd();
    }, 100);
  }, [inputdata]);

  useEffect(() => {
    auth();
  }, []);

  const changepwd = async () => {
    const { opwd, pwd, rpwd } = inputdata;
    if (!opwd || !pwd || !rpwd) {
      return alert(" plz fill data ");
    }
    setLodder(true);

    const url = `${process.env.REACT_APP_MY_API_KEY}/change`;
    try {
      const data = await axios.post(url, { opwd, pwd, rpwd, user });
      console.log(data);
      alert("pwd change ");
    } catch (error) {
      console.log(error.message);
      alert("invalid detail check the data  ");
    }
    setInputdata({ opwd: "", pwd: "", rpwd: "" });
    setLodder(false);
  };

  return (
    <>
      <div className="logincontainer ">
        <div className="loginbox change">
          <div class="box">
            <div className={"heading"}>
              <h1>Change pwd</h1>
            </div>
            <div className="inputfeild">
              <input
                type="text"
                name="opwd"
                onChange={handle}
                value={inputdata.opwd}
                placeholder="Old password"
              />
              <input
                type="password"
                name="pwd"
                onChange={handle}
                value={inputdata.pwd}
                placeholder="Password"
              />
              <input
                type="password"
                name="rpwd"
                onChange={handle}
                value={inputdata.rpwd}
                placeholder="Repeat Password"
              />

              {match === true ? "" : <p>Pwd Not Match </p>}
            </div>
            <div className="lbtn">
              <button disabled={lodder || !match} onClick={changepwd}>
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
