import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lodder } from "../../context/Lodder";
import "./login.css";

export default function Login() {
  const [inputdata, setInputdata] = useState({ email: "", pwd: "" });
  const handle = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  const { lodder, setLodder } = Lodder();

  const navigate = useNavigate();

  const submit = async () => {
    setLodder(true);
    const { email, pwd } = inputdata;
    const url = `${process.env.REACT_APP_MY_API_KEY}/login`;
    try {
      const { data } = await axios.post(url, { email, pwd });
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.token));
      setInputdata({ email: "", pwd: "" });
      navigate("/dashbord");
    } catch (error) {
      alert(" invalid detail ");
      console.log(error);
    }
    setLodder(false);
  };

  const auth = () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (auth) {
      navigate("/dashbord");
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return (
    <>
      <div className="logincontainer ">
        <div className="loginbox change">
          <div class="box">
            <div className={"heading"}>
              <h1>Login </h1>
            </div>
            <div className="inputfeild">
              <input
                type="text"
                name="email"
                onChange={handle}
                value={inputdata.email}
                placeholder="Email"
              />
              <input
                type="password"
                name="pwd"
                onChange={handle}
                value={inputdata.pwd}
                placeholder="Password"
              />
            </div>
            <div className="lbtn">
              <button onClick={submit} disabled={lodder}>
                Log-in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
