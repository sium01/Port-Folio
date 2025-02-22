import React from "react";
import "./About.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="about" id="about">
          <div className="row">
            
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a Full Stack Developer with a passion for creating
                innovative web applications. I am a quick learner and I am
                constantly looking for new technologies to learn. I have
                experience in developing web applications using MERN stack. I
                have also worked on projects using React, Redux, Node.js,
                Express.js, MongoDB, and Firebase. I have a keen interest in
                learning new technologies and I am always looking for new
                opportunities to learn and grow.  

              </p>

            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHIGJnGBekYRg/profile-displayphoto-shrink_800_800/B56ZUqx35CHoAc-/0/1740179472807?e=1745452800&v=beta&t=ACPfkNEft1FRFZaZamkB2QKUYgzL0OwCQ91bNdQ2q_E"
                alt="Profile_Pic"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;