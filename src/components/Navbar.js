import React, { useEffect }  from "react";
import { useState} from "react";
import {Link,useLocation} from "react-router-dom"
import "./navbar.css"
import ReorderIcon  from "@material-ui/icons/Reorder"

export default function Navbar(){
   const [expandNavbar, setExpandNavbar] = useState(false);

   // if location changes, close the expanded 
   const location = useLocation();
    useEffect(() =>{
        setExpandNavbar(false)
    },[location])

    return (
        <div className="navbar" id={expandNavbar? "open" : "close"}>
             <div className="toggleButton">
                <button onClick={ () => {setExpandNavbar(prev => !prev)}}>
                  <ReorderIcon/>
                </button>
            </div>

            <div className="links">
                <Link  to= "/">Home</Link>
                <Link  to= "/projects">Projects</Link>
                <Link   to= "/experience">Experience</Link>
            </div>

            
        </div>
    )
}