import React from "react";
import user from "../images/user.jpg"
import logo from "../images/small-logo.png"
import "./Header.style.css"


const HeaderComponent = () => (
    <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <input type="search" className="inputbox" placeholder="...search"/>
        <img src={user} alt='user' width='50px' className="user" />
    </div>
)

export default HeaderComponent;