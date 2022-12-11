import React from 'react';
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor="#191970">
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2022"
                iconStyle={{background:"#ADD8E6", color: "#fff"} }
                icon={<EngineeringIcon />}
                >
                <h3 className="vertical-timeline-element-timeline">West Virginia Univeristy, Astronomical Data Analyst, Morgantown, WV</h3>
                <p>Analyze the effectiveness of IR noise filters using statistical means such as MAD and Relative Entropy. 
                Use Matlab to run a variety of scripts focused on collecting data that compares each statistic and compares results with another undergraduate research assistant, and leading research professor.
                </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2022"
                iconStyle={{background:"#ADD8E6", color: "#fff"} }
                icon={<EngineeringIcon />}
                >
                <h3 className="vertical-timeline-element-timeline">JLG, Software Engineer Intern, Hagerstown, MD</h3>
                <p>Identified 3 projects that will allow full time engineers to easily test, market and simulate devices and machines for JLG which was a benchtop python tester, impact testing, and a simulator for scissor lifts.
                Collaborated with 2 interns developing Python code used for communicating with a telecommunications device through PCAN and a Vector interface, and applied codebase to a specialized need for testing. 
                Participated in daily scrum meetings with over 10 other engineers, speaking on project progress and tickets.
                Completed on average 3 tickets each sprint throughout the summer on various projects such as the benchtop tester using python and CAN, impact testing which applied the python script, and suitcase simulator wiring. 
                Allowed engineers to test new telecommunications devices at their desk by allowing them to automatically check functionality of the device through igniting LEDs, horn, and reading temperature and pressure data.
                </p>
                </VerticalTimelineElement>



                <VerticalTimelineElement className="vertical-timeline-element--education" date="2019-2023"
                iconStyle={{background:"#191970", color: "#ffff"} }
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-timeline">West Virginia Univeristy, Morgantown, WV</h3>
                <h3 className="vertical-timeline-element-timeline">Computer Engineering <br/> Electrical Engineering</h3>
                </VerticalTimelineElement>



                <VerticalTimelineElement className="vertical-timeline-element--education" date="2015-2019"
                iconStyle={{background:"#191970", color: "#ffff"} }
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-timeline">Weir High School, Weirton, WV</h3>
                </VerticalTimelineElement>

              
                
        </VerticalTimeline>
    </div>
  )
}

export default Experience;