import React, { useState } from "react";
import { useEffect } from "react";
import { getprofile } from "../../api/api";
import FileBase from "react-file-base64";
import axios from "axios";

import { Lodder } from "../../../context/Lodder";

export default function About() {
  const [profiledata, setprofiledata] = useState({
    img: "",
    cv: "",
  });

  const { lodder, setLodder } = Lodder();

  const [id, setid] = useState("");

  const Change = async () => {
    setLodder(true);
    const { cv, img } = profiledata;
    if (!cv || !img) {
      alert("select fille ");
      setLodder(false);
      return;
    }
    const url = `${process.env.REACT_APP_MY_API_KEY}/profile`;
    try {
      axios.post(url, { cv, img, id });
      setprofiledata({
        img: "",
        cv: "",
      });
      alert("update");
    } catch (error) {
      alert("errr");
    }
    setLodder(false);
    fetchprofile();
  };

  const fetchprofile = async () => {
    setLodder(true);
    try {
      const data = await getprofile();
      setid(data[0]._id);
      setprofiledata({
        img: data[0].img,
        cv: data[0].cv,
      });
    } catch (error) {
      console.log(error.message);
    }

    setLodder(false);
  };

  useEffect(() => {
    fetchprofile();
  }, []);

  return (
    <div>
      <div className="form">
        <div className="form_box">
          <div className="fn">
            <div class="segment skillSection">
              <h1>profile </h1>
            </div>
          </div>

          <label className={"lable"}>
            <h1 className="card_title">resume</h1>
            <div>
              <FileBase
                className={"filebase"}
                multiple={false}
                onDone={({ base64 }) => {
                  setprofiledata({ ...profiledata, cv: base64 });
                }}
              />
            </div>
          </label>
          <label className={"lable"}>
            <h1 className="card_title">profile</h1>
            <div>
              <FileBase
                className={"filebase"}
                multiple={false}
                onDone={({ base64 }) => {
                  setprofiledata({ ...profiledata, img: base64 });
                }}
              />
            </div>
          </label>

          <div className="_btn">
            <div className="">
              <button
                type="button"
                className="icon ion-md-lock btn "
                disabled={lodder}
                onClick={() => {
                  Change();
                }}
              >
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
