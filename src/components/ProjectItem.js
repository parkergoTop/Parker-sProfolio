import React from "react";

import "./projectItem.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


export default function ProjectItem({title,images}){
     
   function displayImages(){

    return (
    
        <Swiper  cssMode={true}  navigation={true}
              pagination={true}   mousewheel={true}    keyboard={true}
             modules={[Navigation, Pagination, Mousewheel, Keyboard]}  className="mySwiper">

     
          {images.map(element => {return <SwiperSlide> <img className="project-img" src={element}/>  </SwiperSlide>})}
               
        
      </Swiper>
    )

   }
    
    return(
        <div className="project-item">
             {displayImages()} 
             <h1>{title}</h1>
        </div>
    )
}