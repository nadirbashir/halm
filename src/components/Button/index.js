import React from 'react'

export const Button = ({title,size}) => {
    return (
        <div className={`${size} theme-dark`}>
            {title}
        </div>
    )
}
