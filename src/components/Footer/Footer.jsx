import React from 'react'
import insta from '../../assets/instagram.svg'
import './footerStyle.css';


export default function Footer() {
  return (
    <div className=' ft mt-10 lg:flex hidden flex-col border-t-2 ml-14' >

        <div>
            <div>
                <img src={insta}></img>
            </div>
            <a>Shinoy</a>
        </div>
        <div>

        </div>

    </div>

)}