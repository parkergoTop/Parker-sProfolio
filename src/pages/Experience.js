import React from "react";


import {VerticalTimeline, 
        VerticalTimelineElement} from  "react-vertical-timeline-component"


import SchoolIcon from "@material-ui/icons/School"
import { Work } from "@material-ui/icons";

import "react-vertical-timeline-component/style.min.css"



import "../css/experience.css"

export default function Experience(){
    return <div className="experience"> 
         <VerticalTimeline lineColor="#373E98">
            <VerticalTimelineElement className="vertical-timeline-element--education"
               date="Mar 2017- Mar 2020"
               iconStyle={{background:"#373E98", color:"#fff"}}
               icon={<SchoolIcon/>}>
               
                <h4>Bachelor of Science in Information Technology <br/> - University of Technology Sydeny </h4>
                <p> 
                  Majored in System Development, sub-majored in Data Analytics.
                  Graduated with Distinction GPA.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work"
               date=" June 2021 - December 2021 "
               iconStyle={{background:"rgb(162, 150, 42)", color:"#fff"}}
               icon={<Work/>}>
               <h4> Software Engineer <br/> -HSBC</h4>
               
               <p> Graduate program, Working in a Scrum team for a React based global frontline banking system. 
                   Was trained for Prod & Dev Support.
               </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
               date="August 2022- Current"
               iconStyle={{background:"#373E98", color:"#fff"}}
               icon={<SchoolIcon/>}>
               
                <h4> Professional Year <br/> - Performance Education </h4>
                <p> For earning australian immigration points, and educated in fitting in  Australian workplace culture</p>
            </VerticalTimelineElement>
         </VerticalTimeline>
    </div>
}

