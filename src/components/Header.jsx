import React from "react"
import "../style/header.css";

export default function Header() {
    return (
        <header>
            <img src="../../src/assets/Zeus-LMS-logo.svg" className="header--icon" />
            <h4 className="header--user">U</h4>
        </header>
    )
}