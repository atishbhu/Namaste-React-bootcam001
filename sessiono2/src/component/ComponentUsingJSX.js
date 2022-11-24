import React from "react";
import "./ComponentUsingJSX.style.css"
import HeaderComponent from "./HeaderComponent";
const TitleComponent = () => <h2>Using Namaste React Bootcam</h2>

const ComponentUsingJSX = () => {
    return (
        <div className="example">
            <HeaderComponent />
            <h1>Master in React</h1>
            <TitleComponent />
            <h3>In 3 months</h3>
        </div>
    )
}

export default ComponentUsingJSX;