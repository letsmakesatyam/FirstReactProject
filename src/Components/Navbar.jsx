import React from "react"
import ReactLogoImage from "../Images/ReactLogoImage.png"
function Navbar(){
    const firstName = "Satyam"
    const lastName = "Revgade"
    return(
        <div className = "navbar">
                <div className = "image-container">
                        <img className = "image" src = {ReactLogoImage}/>
                        <h1 className = "navbar-heading">ReactFacts: by {firstName}  {lastName}</h1>
                </div>
                
                <h2 className = "navbar-heading-2">React Course - Project 1</h2>

        </div>
        
    )
}
export default Navbar