import "./footer.css"
import React from "react"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import  EmailIcon from "@material-ui/icons/Email"

import InstagramIcon from "@material-ui/icons/Instagram"


export default function Footer(){
    return(
        <div className="footer">
          <div className="socialMedia"> 
            <LinkedInIcon/>
            <EmailIcon/>
            <InstagramIcon/>
          </div>

        </div>
    )
}