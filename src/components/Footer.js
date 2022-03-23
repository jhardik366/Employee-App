import React from "react";
import "../App.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="Footer">
            <p>
                <span>Privacy Policy</span> V8.1 | Copyright &copy;{" "}
                {currentYear} GrapeSEED Media Ltd. All rights reserved{" "}
            </p>
        </div>
    );
}

export default Footer;
