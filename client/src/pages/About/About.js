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
              I am a  MERN Stack Developer with expertise in React.js,
Node.js, Express.js, and MongoDB. I build high-performance,
scalable, and user-friendly web applications that solve real-world
problems. My focus is on clean code, optimized architecture, and
seamless user experience.
With a deep understanding of frontend & backend technologies,
I have developed and deployed multiple full-stack applications,
integrating modern UI/UX practices and robust backend solutions.<br/>
My expertise includes:<br/>
✔ Full-Stack Web Development – From frontend to backend,
ensuring seamless performance.<br/>

✔ API Development & Integrations – Building secure and efficient
backend systems.<br/>
✔ Database Optimization – Structuring MongoDB for performance
and scalability.<br/>
✔ Performance-Driven Development – Writing optimized and
scalable code.<br/>
I am actively seeking remote or on-site opportunities where I can
contribute my skills, work with innovative teams, and build cuttingedge web solutions.<br/>
Let’s connect and create something amazing!

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