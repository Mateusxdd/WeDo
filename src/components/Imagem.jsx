import React from "react";
import logo from '../assets/logo.png'
import terra from '../assets/terra.png'

function Imagem() {
    return (
        <div>
            <img src={logo} alt="mundo" />
            <br />
            <img src={terra} alt="terra" />
        </div>
    )
}

export default Imagem