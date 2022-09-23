import "./footer.css"
import React from "react"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import  EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"


export default function Footer(){
    return(
        <div className="footer">
          <div className="socialMedia"> 
            <LinkedInIcon/>
            <EmailIcon/>
            <GithubIcon/>
          </div>

        </div>
    )
}