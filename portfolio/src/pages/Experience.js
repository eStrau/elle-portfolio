import React from 'react'
import { Box, Typography } from '@mui/material';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import backgroundImg from '../images/backgroundImage.jpg';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EngineeringIcon from '@mui/icons-material/Engineering';


const Experience = () => {
    return(
        <div>
            <Box
                sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '30vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Typography variant="h2" gutterBottom>
                    Experience
                </Typography>
            </Box>
            <Box sx={{ backgroundColor: '#f5f5f5', py: 2 }}>
                <VerticalTimeline lineColor='#92374D'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education" //function name inside of css styling they give us
                        date = "August 2022 - Expected May 2026"
                        iconStyle={{background: "#E5C2C0", color: "#fff"}}
                        icon = {<SchoolIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            University of Florida, Gainesville, FL 
                        </h3>
                        <h4 className="vertical-timeline-element-title">
                            Bachelor's Degree
                        </h4>
                        <p>Computer Science</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2023 - April 2024"
                        iconStyle={{background: "#92374D", color: "#fff"}}
                        icon = {<EngineeringIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            eSwamp Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            UF Society of Women Engineers 
                        </h4>
                        <p> • Coordinated an all-day event to recruit incoming freshman into SWE by introducing them to the College of Engineering and the various opportunities the University of Florida has to offer.</p>
                        <p> • Hosted professional and student panels to provide insight into the industry and student life along with a major mentoring session and engineering club fair</p> 
                        {/* <p> </p> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June 2023 - August 2023"
                        iconStyle={{background: "#E5C2C0", color: "#fff"}}
                        icon = {<WorkIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            Teaching Assistant
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Girls Who Code | Summer Immersion Program 
                        </h4>
                        <p> • Assisted students with Game Design focused projects that used p5.js</p>
                        <p> • Lead and facilitated breakout groups, which includes an advisory of 10-12 students each day to build culture and connection during the program</p>
                        <p> • Supported students in class through teaching mini lessons, demonstrations, and answering questions</p> 
                        <p> • Co-hosted Students Hours to assist with project questions and debugging and be actively engaging through discord to provide further support</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="January 2024 - April 2024"
                        iconStyle={{background: "#92374D", color: "#fff"}}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            Teaching Assistant
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            University of Florida | Applications of Discrete Structures
                        </h4>
                        <p>• Co-taught discussion section of 60 students by actively reviewing lecture content and collaboratively working through practice problems to enhance understanding and application of key concepts in discrete structures</p>
                        <p>• Hosted 3 hours of office hours each week for students to have a dedicated space to seek clarification on class content, homework, or example problems</p>
                        <p>• Created exam content based on the materials learned throughout the course and graded exams while providing students feedback on the questions</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="April 2024 - Present"
                        iconStyle={{background: "#92374D", color: "#fff"}}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            Co-Corporate Relations Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Women in Computer Science & Engineering (WiCSE)
                        </h4>
                        <p>• Develop and maintain relationship with over 80 past, current, and prospective corporate sponsors, including crafting the sponsorship packet and communicating with recruiters to organize events</p>
                        <p>• Organize WiCSE’s Fall Career Fair, Bytes & Brunch, by managing volunteers, handling the budget, and securing company participation to increase WiCSE members’ exposure and relations</p>
                        <p>• Coordinate and communicate with my counterpart to plan companies' sponsorship perks, such as workshops, info sessions, and speakers</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="April 2024 - Present"
                        iconStyle={{background: "#92374D", color: "#fff"}}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            Lead Logistics Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            SwampHacks
                        </h4>
                        <p>• Oversee all logistical aspects of university-wide hackathon to accommodate 500+ hackers, including venue booking, food catering, and event security</p>
                        <p>• Develop the event schedule for hackers, volunteers, and mentors to follow to ensure a smooth, efficient event for all involved</p>
                        <p>• Communicate team ideas to a 20-person executive director team and assist in crucial decision-making process to ensure a successful event is planned</p>
                        <p>• Lead team meetings, setting focus areas and goals to ensure cohesive team efforts and successful event execution</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2024 - August 2024"
                    iconStyle={{background: "#92374D", color: "#fff"}}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            Software Engineering Intern
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            UKG
                        </h4>
                        <p>• Collaborated with the FleX Foundation pillar on authentication to enhance the user login experience to all UKG products for over 80,000 company customers</p>
                        <p>• Leveraged Java, Bootstrap, OpenAM, CI scripts, Postman, Docker, and Kubernetes for development and debugging tasks</p>
                        <p>• Addressed UI defects to accommodate all devices by reducing inconsistencies by 30% across various devices and browsers</p>
                        <p>• Improved multifactor authentication selection display for emails by implementing Auth0 formatting for simple identification </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="August 2024 - Present"
                    iconStyle={{background: "#92374D", color: "#fff"}}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            Teaching Assistant
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            University of Florida | Programming Language Concepts
                        </h4>
                        <p>• Host office hours 4 times a week to provide students with guidance on course projects and to understand how to build a compiler</p>
                        <p>• Curate best GitHub practices for students to display while working on the semester long project of building a compiler</p>
                        <p>• Develop sample and quiz questions to help student understand the concepts and learn about steps of lexing, parsing, interpreting, analyzing, and generating source code into executable code</p>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="August 2022 - Present"
                    iconStyle={{background: "#92374D", color: "#fff"}}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            figure out
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            
                        </h4>
                        <p> </p>
                        <p> </p>
                    </VerticalTimelineElement> */}
                </VerticalTimeline>
            </Box>
        </div>
    );
}

export default Experience