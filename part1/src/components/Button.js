import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return (
        <button onClick={props.handleClick} >
            {props.text}
        </button >
    )
}

export default Button;