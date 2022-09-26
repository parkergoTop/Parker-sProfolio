import "./footer.css"
import React from "react"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import  GitHub from "@material-ui/icons/GitHub"

import InstagramIcon from "@material-ui/icons/Instagram"


export default function Footer(){
    return(
        <div className="footer">
          <div className="socialMedia"> 
            <LinkedInIcon  onClick = {() => window.open("https://www.linkedin.com/in/qingwen-xiao-031508234/")}/>
            <GitHub  onClick = {() => window.open("https://github.com/parkergoTop")}/>
            <InstagramIcon  onClick = {() => window.open("https://www.linkedin.com/in/qingwen-xiao-031508234/")}/>
          </div>

        </div>
    )
}