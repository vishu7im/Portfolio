import {
  GitHub,
  Instagram,
  LinkedIn,
  WhatsApp,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./footer.css";

export default function () {
  return (
    <>
      <div className="Footer">
        <div className="footer_link">
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
            <a href="https://twitter.com/vishu7im" target={"_blank"}>
              <Twitter />
            </a>
          </li>
        </div>
      </div>
    </>
  );
}
