import React from "react";

import GithubIcon from "@material-ui/icons/GitHub"
import  EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"

import SkillsCard from "../components/SkillsCard";

import "./home.css"


export default function Home(){
     
    //skills data   {category: "Front-end", skills : [ {}, {} , {}]}

    const frontendSkills = {category: "Front End", skills : [
                                                              {icon: "", skill: "CSS( + SASS)"}, {icon: "", skill: "HTML"}, {icon: "", skill: "JS (Valinna, ES6+)"} , {icon: "", skill: "React"}
                                                                  ]}

    return <div className ="homePage"> 
         
         <div className="about">

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


         <div className="skills"> 
             <SkillsCard key= {frontendSkills.category}
                         skills={frontendSkills.skills}/>

         </div>
    </div>
}