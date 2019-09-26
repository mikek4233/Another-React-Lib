import React from 'react'
import './simpleredbutton.css'

const SimpleRedButton = (props) => {
    return(<button className="red-button">
        {props.text}
    </button>)
}

export default SimpleRedButton