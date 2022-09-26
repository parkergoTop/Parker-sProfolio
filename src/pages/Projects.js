import React from "react"

import ProjectItem from "../components/ProjectItem"
import { projectList } from "../helpers/ProjectList"

import "./project.css"

export default function Projects(){
   
    
    function displayProjects(){
      console.log(projectList)
      return (projectList.map(element => { return (<ProjectItem title={element.title} images={element.images}/>)}))
    }


    return (
      <div>
          <h2 className="projects-page-title"> My Personal Projects</h2>
          <div className="projects"> {displayProjects()} </div>
      </div>
    )
}