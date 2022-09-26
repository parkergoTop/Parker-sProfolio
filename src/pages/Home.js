import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


import GithubIcon from "@material-ui/icons/GitHub"
import  EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"

import SkillsCard from "../components/SkillsCard";

import "./home.css"

import cssIcon from "../images/css.png"
import htmlIcon from "../images/html.png"
import JSIcon from "../images/js.png"
import reactIcon from "../images/react.png"
import javaIcon from "../images/java.png"
import gitIcon from "../images/git.png"
import jspIcon from "../images/jsp.png"
import springIcon from "../images/springboot.png"
import sqlIcon from "../images/sql.png"
import jiraIcon from "../images/jira.png"
import androidIcon from "../images/android.png"
import agileIcon from "../images/agile.png"
import jenkinsIcon from "../images/jenkins.png"


export default function Home(){
     
    //skills data   {category: "Front-end", skills : [ {}, {} , {}]}

    const frontendSkills = {category: "Front End", skills : [
                                                              {icon: cssIcon, skill: "CSS (& SASS)"}, {icon: htmlIcon, skill: "HTML"}, {icon: JSIcon, skill: "JS (Valinna, ES6+)"} , {icon:reactIcon , skill: "React"}
                                                                  ]}
    const backendSkills = {category: "Back End", skills : [
                                                            {icon: javaIcon, skill: "Java"}, {icon: jspIcon, skill: "JSP"}, {icon:springIcon, skill: "Springboot"} , {icon: sqlIcon , skill: "SQL"}, {icon: androidIcon, skill: "Android Development"},
                                                                        ]}

     const tools = {category: "Tools & Platforms", skills : [
                                                    {icon: agileIcon, skill: "Agile/Scrum"}, {icon: jiraIcon, skill: "JIRA/Confluence"}, {icon: gitIcon, skill: "Git/Github"} , {icon:jenkinsIcon , skill: "Jenkins"},
                                                                                ]}

    const cs = {category: "CS Essentials", skills : [
                                                       {icon: "", skill: "Computor Netwroking HTTP/TCP"}, {icon: "", skill: "Data Structure & Algorithm"}, {icon: "", skill: "Unix/Linix"} , {icon:"", skill: "Data Analytics & Neural Network"},
                                                                                                                ]}
    return <div className ="home-page"> 
         
         <hr/>

        <div className="about">
           <h2 className="home-title"> About </h2>
           <div className="about-content">
              <div className="left-col-about">
              <img className="selfie" src= "#" />
              <h2 className="name">Parker Ciao </h2>
              </div >

         
               <div className="right-col-about">
                  <p> Software Engineer</p>
                  <p> Bachelor of Science in IT with Distinction, University of Technology Sydney</p>
                  <p> Was working for HSBC</p>
                  <p> Passionate Creator,  Quick Learner</p>
                  <div className="phone-detail">  <PhoneIcon/>   +61 0404842938 </div>
                  <div className="email-detail">  <EmailIcon/>  parkerciao@gmail.com </div>
                  <div className="github-detail">    <GithubIcon/> https://github.com/parkergoTop</div>
             </div>
        </div>
             
         </div>

         <hr/>
         <div className="skills"> 
          <h2 className="home-title"> Skills </h2>
         <Swiper  cssMode={true}  navigation={true} pagination={true} mousewheel={true} keyboard={true}
               modules={[Navigation, Pagination, Mousewheel, Keyboard]}className="mySwiper" >
                <SwiperSlide className="myswiper">
                    
                     <SkillsCard
                         key= {frontendSkills.category}
                         title={frontendSkills.category}
                         skills={frontendSkills.skills}/>

                     <SkillsCard
                         key= {backendSkills.category}
                         title={backendSkills.category}
                         skills={backendSkills.skills}/>

                      <SkillsCard
                         key= {tools.category}
                         title={tools.category}
                         skills={tools.skills}/>
 
                </SwiperSlide>

                <SwiperSlide className="myswiper">
                     <SkillsCard
                         key= {cs.category}
                         title={cs.category}
                         skills={cs.skills}/>

                </SwiperSlide>
                
                
                
             </Swiper>


         </div>
         
    </div>
}