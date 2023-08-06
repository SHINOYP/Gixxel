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
        <h1>Fail, Fail Again, Fail Better</h1>
        <p>
          Iam a diverse and passionat dev that codes beautiful designs into
          working applications.I stay kight on my feet and truly enjoy
          delivering greate work
        </p>
        <div>
          <button className="btn-info"   onClick={() => { window.location.href = 'https://github.com/SHINOYP/Gixxel'; } }> 👀  Insights</button>
          <button  className="btn-info " onClick={() => { window.location.href = 'https://mail.google.com/mail/u/0/#search/shinoyshinoo%40gmail.com?compose=CllgCJqTfltWnQSRqMKvVKqxJzxvZJNHpFJMRsRnnSLHvkrzhvbKKfPKRZkCmtQkmtVbhjmCVrg'; } }>👋  Contact</button>
        </div>
      </div>
      <div className="footer-icons">
        <h1>Logo</h1>

        <span>
         
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &copy; {new Date().getFullYear()} Your Company . All rights reserved.
        </span>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/shinoyp/">
            {" "}
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/shinoy._.p/">
            {" "}
            <BsInstagram />
          </a>
          <a href="https://github.com/SHINOYP">
            {" "}
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
