import React from "react";
import {useParams} from "react-router-dom"
import {projectList} from "../helpers/ProjectList.js"
import GitHubIcon from "@material-ui/icons/GitHub";

import "../css/projectDisplay.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function ProjectDisplay(){
     const {id} = useParams();
     const project = projectList[id]


     return <div className="project">
        <h2 className = "project-title"> {project.title}</h2>
        <Swiper  cssMode={true}  navigation={true}
                 pagination={true}   mousewheel={true}    keyboard={true}
                 modules={[Navigation, Pagination, Mousewheel, Keyboard]}  className="mySwiper">

     
          {project.images.map(element => {return <SwiperSlide className="project-slide" > <img className="project-img" src={element}/>  </SwiperSlide>})}
               
        </Swiper>
        <div className="github"> <GitHubIcon className ="github-icon"/> Check on Github </div>
        <h3 className="project-skills"> {project.skills}</h3>
     </div>
}