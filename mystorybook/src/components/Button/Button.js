import React from 'react'
import './Button.css'

function Button (props) {
    const { variant = 'primary', children, ...rest } = props
    console.log(variant,rest)
    return (
        <button className={`button ${variant}`}  {...rest}>
        {children}
        </button>
    )
}

export default Button