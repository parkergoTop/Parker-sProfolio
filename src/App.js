import React from "react"
import "./app.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import ProjectDisplay from "./pages/ProjectDisplay"
import Navbar  from "./components/Navbar"
import Footer from "./components/Footer"

export default function App (){
   return <div className="app">
       
      <Router>
         <Navbar />


        <Routes>
             
            <Route  path= "/" element= {<Home/>}/>
            <Route  path= "/experience" element= {<Experience/>}/>
            <Route  path= "/projects" element= {<Projects/>}/>
            <Route  path="/project/:id" element={<ProjectDisplay />}/>
           
        </Routes>


         <Footer/>
      </Router>
   </div>

}