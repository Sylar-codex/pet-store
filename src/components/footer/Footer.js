import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-div">
        <p>©2022 Twinkle | made by victor</p>
        <FontAwesomeIcon
          style={{ marginTop: "10px", cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/Sylar-codex");
          }}
          size="2x"
          icon={faGithub}
        />
      </div>
    </div>
  );
}
export default Footer;
