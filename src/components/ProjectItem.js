import React from "react";
import {useNavigate} from "react-router-dom"

import "../css/projectItem.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


export default function ProjectItem({title,images, index}){

 const navigate = useNavigate();
     
   function displayImages(){
   

    return (
    
        <Swiper  cssMode={true}  navigation={true}
              pagination={true}   mousewheel={true}    keyboard={true}
             modules={[Navigation, Pagination, Mousewheel, Keyboard]}  className="mySwiper">

     
          {images.map(element => {return <SwiperSlide className="project-images"> <img className="project-img" src={element}/>  </SwiperSlide>})}
               
        
      </Swiper>
    )

   }
    
    return(
        <div className="project-item" >
             
             {displayImages()} 
             
             <h3 className="project-title" onClick={() => {navigate("/project/" + index)}}>{title}</h3>
        </div>
    )
}