import React from 'react';
import {AiFillGithub,AiOutlineLinkedin,AiFillTwitterCircle,AiOutlineMail} from "react-icons/ai";
import {BsFacebook,BsInstagram} from "react-icons/bs"
import {FaLocationArrow,FaPhoneVolume} from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> At InnovateMarket, we are committed to reshaping the hawker-buyer dynamic for the Indian market. Our mission is to forge a frictionless platform that empowers Indian hawkers to flourish in the digital era, all while providing buyers the ease of doorstep delivery. Come be a part of our journey as we transform the way Indian hawkers and buyers connect.
        </p>
        <div className="icons menu">
          <a href="https://github.com/Rafikhan19"><i className="fa fa-facebook"><AiFillGithub /></i></a>
          <a href="https://www.linkedin.com/in/khanrafiahmed/"><i className="fa fa-twitter"><AiOutlineLinkedin /></i></a>
          <a href="https://www.linkedin.com/in/khanrafiahmed/"><i className="fa fa-linkedin"><BsFacebook /></i></a>
          <a href="https://www.linkedin.com/in/khanrafiahmed/"><i className="fa fa-google-plus"><AiFillTwitterCircle /></i></a>
          <a href="https://www.linkedin.com/in/khanrafiahmed/"><i className="fa fa-instagram"><BsInstagram /></i></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa "><FaLocationArrow/></i>
          <p><span> Khandagiri,</span> Bhubaneswar,odisha</p>
        </div>
        <div >
         
          <i className="fa "><FaPhoneVolume /></i>

          <p> <a href="tel:+91 (629) 500-0285" className="p-text">+916295000285/</a>
         
</p>
<p> <a href="tel:+91 (914) 425-6183" className="p-text">+919144256183</a></p>
        </div>
        <div>
          <i className="fa "><AiOutlineMail /></i>
        
          <p><a href="mailto:hardcoder111@gmail.com" target="_black" className="p-text">hardcoder111@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        {/* <h2><span> <img src={VSLOGO} alt="server" /></span></h2> */}
        <p className="menu">
          <a href="/"> &gt; Home</a> 
          <a href="/Market"> &gt; Market Place</a> 
          <a href="/HelpAs"> &gt; Help</a> 
          <a href="/About"> &gt; About Us</a> 
        </p>
        <p className="name"> Vyapaar Saathi &copy; 2023|All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
