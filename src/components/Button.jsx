import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'hover:bg-blue-100',
    textColor = 'text-white',
    classname = '',
    ...props
}) {
    return (
        <button type={type} className={`px-4, py-2 rounded-full ${bgColor} ${textColor} ${classname}`} {...props}>
            {children}
        </button>
    )
}

export default Button


