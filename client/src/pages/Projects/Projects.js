import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <>
      <div className="container project" id="projects" style={{ paddingTop: "100px" }}>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          
        </p>
        <div className="row">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="col-md-6 col-sm-12">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">FrontEnd</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQyD8la3F73ZcNW-psg69b4jf5zMRC66OTw&s"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">React</span>

              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                    BUBBLE-GAME
                  </h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/sium01/Bubble-Game"
                >
                  View
                </a>
               
                
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="col-md-6 col-sm-12">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybf82ho5rIVvdPJscOZYiVjo4pZD47nWpfQ&s"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">Javascript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Quiz-APP</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/sium01/Quiz-App"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="col-md-6 col-sm-12">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Backend </span>
                <img
                  src="https://camo.githubusercontent.com/1c93d3a37abf14f95b1b64fbc4646e719e8cba80cce25faeaa9bf0e792ddf0a5/68747470733a2f2f62757368616e7369726775722e696e2f77702d636f6e74656e742f75706c6f6164732f323032302f30382f486572626572742d53696d6f6e2e706e67"
                  alt="project3"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">CRUD API</h5>
                </div>
                <a className="ad-btn" href="https://github.com/sium01/Craud-API">
                  View
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="col-md-6 col-sm-12">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://www.figma.com/community/resource/ccd60066-86ea-45f6-810b-9a4734419528/thumbnail"
                  alt="project4"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">API</span>

              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Weather-App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/sium01/Weather-App"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;



