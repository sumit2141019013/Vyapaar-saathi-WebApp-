
import React from 'react';
import { ChatState } from '../Context/ChatProvider';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import rafiimg from '../assets/profile.png';
import sumImg from '../assets/member6.png'


const CardComponent = ({ id, imageUrl, title, description,ll }) => {
  return (
    <div className="card">
      <input id={`card${id}`} type="checkbox" />
      <label className="tgl-btn" htmlFor={`card${id}`}>
        <span></span>
      </label>
      <div className="tgl-view">
        <div className="card-image">
          <img src={imageUrl} alt="Card" />
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-detail">{description}
        
        </p>
        <a href={ll} target='blank' className="card-title2">portfolio</a>
       
      </div>
    </div>
  );
};
const About = () => {
  const { user } = ChatState();

  return (
    <>
   {user && <SideDrawer />}
   <div className='about_mainback'>
    <div className="about_container">
      <h1>.</h1>
      <div className="grid">
        <CardComponent
          id={1}
          imageUrl={rafiimg}
          title="Rafi Ahmed Khan"
          description="
heyy this side Rafi ,
I'm a skilled third-year student at ITER, SOA University, focusing on being a Full Stack Developer. I handle both the front-end and back-end of applications, creating smooth and easy-to-use software. I know various programming languages and frameworks, allowing me to solve tricky problems with creative solutions."
ll="https://rafiahmedkhan.vercel.app/"
        />
        <CardComponent
          id={2}
          imageUrl={sumImg}
          title="Sumit Saha"
          description="I'm a third-year student at ITER, SOA University, fully engaged in my studies and personal development. I thrive on challenges and am committed to continuous learning and collaboration. Proudly bearing registration number 2141019013 on this transformative journey."
        ll="#"
        />
       
      </div>
    </div>
    </div>
    </>
  );
};

export default About;
