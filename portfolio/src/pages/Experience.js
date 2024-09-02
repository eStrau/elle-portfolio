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
                        <p> • Coordinate an all-day event to recruit incoming freshman into SWE by introducing them to the College of Engineering and the various opportunities the University of Florida has to offer.</p>
                        <p> •	Host professional and student panels to provide insight into the industry and student life along with a major mentoring session and engineering club fair</p> 
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
                        <p> •	Lead and facilitate breakout groups, which includes an advisory of 10-12 students each day to build culture and connection during the program</p>
                        <p> •	Support students in class through teaching mini lessons, demonstrations, and answering questions</p> 
                        <p> • Co-hosting Students Hours to assist with project questions and debugging and be actively engaging through discord to provide further support</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2023 - Present"
                    iconStyle={{background: "#92374D", color: "#fff"}}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            Teaching Assistant
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            University of Florida | Applications of Discrete Structures
                        </h4>
                        <p> </p>
                        <p> </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="April 2024 - Present"
                    iconStyle={{background: "#92374D", color: "#fff"}}
                    >
                        <h3 className="vertical-timeline-element-title"> 
                            Corporate Relations Director
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Women in Computer Science & Engineering (WiCSE)
                        </h4>
                        <p> </p>
                        <p> </p>
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
                        <p> </p>
                        <p> </p>
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
                        <p> </p>
                        <p> </p>
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