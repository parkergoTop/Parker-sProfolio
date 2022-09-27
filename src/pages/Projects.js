import React from "react"

import ProjectItem from "../components/ProjectItem"
import { projectList } from "../helpers/ProjectList"


import "../css/project.css"

export default function Projects(){
   
    
    function displayProjects(){
      console.log(projectList)
      return (projectList.map((element, index) => { return (<ProjectItem title={element.title} images={element.images} index={index}/>)}))
    }


    return (
      <div>
          <h2 className="projects-page-title"> My Personal Projects</h2>
          <div className="projects"> {displayProjects()} </div>
      </div>
    )
}