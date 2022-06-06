import React, { useState, useEffect } from 'react'
import { animated } from 'react-spring'

export const Card = ({
    string,
    fret,
    note,
    backgroundColor,
    style,
    onClick,
    guessTime,
}) => {
    const [timeRemaining, setTimeRemaining] = useState(guessTime)

    const cardStyles = {
        display: 'flex',
        flexDirection: 'column',
    }

    useEffect(() => {
        delay(1000).then(() => {
            const timeLeft = timeRemaining - 1

            if (timeLeft < 0) {
                return
            }

            setTimeRemaining(timeLeft)
        })
    }, [timeRemaining])

    return (
        <animated.div
            style={{ ...style, background: backgroundColor, ...cardStyles }}
            onClick={onClick}
        >
            <h1 style={{ fontSize: 48, marginBottom: -10 }}>{string}</h1>
            {note}
            <h1
                style={{ fontSize: 48 }}
                className="fade-in-text"
                id="fade-in-text"
            >
                {fret}
            </h1>
            <h2 style={{ fontSize: 28 }}>
                Time remaining: {timeRemaining} seconds
            </h2>
        </animated.div>
    )
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}
