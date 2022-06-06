import React from 'react'

export const FretButton = ({ title, onClick, selected }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: 100,
                backgroundColor: 'white',
                height: 50,
                borderRadius: 8,
                marginRight: 8,
                backgroundColor: selected ? 'lightgray' : null,
            }}
        >
            {title}
        </button>
    )
}
