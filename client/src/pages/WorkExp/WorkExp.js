import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Problem Solving
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                HackerRank
              </h4>
              <p>
               Problem Solving With Dynamic Programming language and OOP.
              I Solve Problem With C,C++,Python,Java,Javascript etc.    
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
              Problem Solving
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Leetcode
              </h4>
              <p>
              Problem Solving With Dynamic Programming language and OOP.
              I Solve Problem With C,C++,Python,Java,Javascript etc.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023(October)-2023(December)"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
               Problem-Solving
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Codeforces
              </h4>
              <p>
              Problem Solving With Dynamic Programming language and OOP.
              I Solve Problem With C,C++,Python,Java,Javascript etc.
              </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023(August)-2024(August)"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Digital Marketer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Hello-World
              </h4>
              <p>
                Creative ads campaign,Buissnes-Management,SEO,Buyer Success,  Project
                Management, Team Leading.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;