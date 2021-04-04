import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="container header mt-3">
            <div className="logo-container">
                <img src={"/images/logofeedr.png"} alt="Feedr logo"></img>
            </div>
        </div>
    );
};
export default Header;
