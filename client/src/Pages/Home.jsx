import "./Home.css";
import React from 'react';
import { Link } from "react-router-dom";
import { ChatState } from '../Context/ChatProvider';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import HI from '../assets/HI.png'
import { AiOutlineAndroid,AiTwotoneHome,AiOutlineEnvironment} from "react-icons/ai";
function Home() {
    const { user } = ChatState();
  return (
   
    <>
      <section className="home_sec">
      {user && <SideDrawer />}
        <div className="home_container">

          <h1 className="home_heading1">Vyapaar <h1 className="home_heading3">&nbsp; Saathi</h1> </h1>
         
          <div className="home_section">
            <div className="home_sub4">
              <p className="home_heading2">
                 Transform your local shopping with the Hawkers and Buyers app. Easily connect with nearby hawkers, supporting local businesses while enjoying doorstep convenience. Discover a win-win solution for both buyers and hawkers. Join us today to foster community growth, simplify shopping, and empower your local economy. connect with us now and be part of the movement!
                </p>

              <Link className="home_btn" to="/About">Know About Us</Link>

            </div>
            <div className="home_sub3">
              <img
                src={HI}
                alt="jjh"
                className="home_image2"
              />
            </div>
          </div>
        </div>
        <div className="home_icons">

        </div>

      </section>
      <h1 className="home_features">Key Features</h1>
      <div className="home_second">
        <span className="home_secondicons"><i style={{ color: "white", backgroundColor: "orange" }}><AiTwotoneHome/></i>
          <p> doorstep services</p>
        </span>
        <span className="home_secondicons"><i style={{ color: "white", backgroundColor: "blue" }}><AiOutlineAndroid /></i>
          <p>ai helping assistant</p></span>
        <span className="home_secondicons"><i style={{ color: "white", backgroundColor: "green" }}><AiOutlineEnvironment /></i>
          <p>diverse hawkers</p></span>
      </div>
    </>

  );
}

export default Home;