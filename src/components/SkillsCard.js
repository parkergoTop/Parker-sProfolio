import "./skillsCard.css"
import React from "react"

import cssIcon from "../images/css.svg"
export default function skillsCard(props){

    function setSkillCard(){
        const skills = []
        for(let i = 0; i < props.skills.length; i ++){
         
           skills.push(<li> {props.skills[i].skill}</li>)
        }

        return skills
    }
       
      return(
        <div className="skill-card">
               <h3 className ="skill-card-title"> Front-End </h3>

               <ul className="skills-list"> 
                    {setSkillCard()}
               </ul>
               <img src={cssIcon}/>

        </div>
      )
}