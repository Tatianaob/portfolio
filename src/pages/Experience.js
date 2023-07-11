import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Arkansas, Fayetteville AR.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>  Modern Languages & Cultures, 4.0 GPA </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ada Developers Academy, Seattle WA.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Software Development Certificate
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bilingual Childcare Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Seattle, WA
          </h4>
          <p>
          <li>Tutored and Provided academic support in subject such as Spanish, science,math, social studies.</li>
          <li>Organized and Managed all aspects of children's daily lives including but not limited to planning and
            preparing meals in accordance to their dietary needs.
          </li>
          <li>
            Safely transported children to and from all appointments, school, and
            extracurricular activities.
          </li>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2023- present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer Intern - Nordstrom
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Seattle, WA
          </h4>
          <p>
            <li>Participated in the Sustainability and Data Science Hackathon as a member of the ‘ Reduce Reviews Recycle’ team which was selected as one of the top ten finalists. Our project aimed to encourage employees to review  
              products to decrease product returns and reduce carbon footprint.
            </li>
            <li>Developed API endpoint to retrieve the path to 
              a specified node within a hierarchical data structure in a PostgreSQL LTree</li>
            <li>Built custom React hooks to manage query parameter based state to support deep linking for customers</li>
            <li>Migrated React application Redux thunks to RTK Query API State Management</li>
            <li>Participated in Product Platform Biweekly demos to showcase progress of the user interface development for  taxonomists.</li>

          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

