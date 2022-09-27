
import "../css/skillsCard.css"

import React from "react"


export default function skillsCard(props){
  //props.skills[i].icon
    function setSkillCard(){
        const skills = []
        for(let i = 0; i < props.skills.length; i ++){
         
           skills.push(<li className="skill-element"> 
                            <img   id={props.skills[i].icon==="" ? "no-skill-image" : "skill-image"}src={props.skills[i].icon} />
                                                   {props.skills[i].skill}
                       </li>)
        }

        return skills
    }
       
      return(
        <div className="skill-card">
               <h3 className ="skill-card-title"> {props.title} </h3>

               <ul className="skills-list"> 
                    {setSkillCard()}
               </ul>

        </div>
      )
}