import {Link} from 'react-router-dom'
import React from "react"
import blueBlob from "../images/Blue.png"
import yellowBlob from "../images/Yellow.png" 

export default function Mainn(props){
    return(
        <main>
            <div className="content">
            <img className='yellow' src={yellowBlob} alt="kuch bi" />
                <h1>Quizzical</h1>
                <p>Some description if needed</p>
                <Link to="./components/QuestionsList"> <button className='start' onClick ={() => props.start} > Start Quiz </button> </Link>
            <img className='blue' src={blueBlob} alt="kuch bi" />
            </div>

        </main>
    )
}