import React from "react";
import insta from "../../assets/instagram.svg";
import "./footerStyle.sass";
import {FaLinkedin} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className=" ft">
      <div className="ft-socialLink">
        <BsInstagram color="gray"  size="1.5rem "/>
        <FaLinkedin color="gray"  size="1.5rem "/>
        <AiFillGithub color="gray"  size="1.5rem "/>
      </div>
      <div className="ft-right">
        <small>A Product of TMDB</small>
        <small>All Right Reserver &copy; Shino</small>
      </div>

      <div></div>
    </div>
  );
}
