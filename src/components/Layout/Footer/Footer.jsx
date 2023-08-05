import React from "react";
import insta from "../../../assets/instagram.svg";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import "./footerStyle.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <h1>Code. Code.</h1>
        <p>
          Iam a diverse and passionat dev that codes beautiful designs into
          working applications.I stay kight on our feet and truly enjoy
          delivering greate work
        </p>
        <div>
          <button>Insights</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="footer-icons">
        <h1>Logo</h1>

        <span>
         
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          (c) {new Date().getFullYear()} Your Company Name. All rights reserved.
        </span>
        <div className="footer-social">
          <a href="">
            {" "}
            <FaLinkedin />
          </a>
          <a>
            {" "}
            <BsInstagram />
          </a>
          <a>
            {" "}
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
