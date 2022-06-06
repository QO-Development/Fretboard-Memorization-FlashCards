import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { Card } from './card'
import './styles.css'
import {
    sixthString,
    fifthString,
    fourthString,
    thirdString,
    secondString,
    firstString,
} from './stringData'
import { FretButton } from './button'

export default function App() {
    //
    const [index, set] = useState(0)
    const [arrayNumber, setArrayNumber] = useState(6)

    const onClick = useCallback(() => set(state => (state + 1) % 7), [])

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    //TODO: Add a timer. See 4, 3, 2, 1 seconds left
    //TODO: Add a tool to increment/decrement timer

    return (
        <div className="simple-trans-main">
            {transitions.map(({ item, props, key }) => {
                const stringData = determineArray(arrayNumber)

                const cardData = stringData[item]
                return (
                    <>
                        <Card
                            key={key}
                            string={cardData.string}
                            fret={cardData.fret}
                            note={cardData.note}
                            style={props}
                            backgroundColor={cardData.backgroundColor}
                            onClick={onClick}
                            guessTime={4}
                        />

                        <div
                            style={{
                                height: 100,
                                backgroundColor: cardData.backgroundColor,
                            }}
                        >
                            <FretButton
                                title={'Sixth String'}
                                onClick={event => {
                                    event.preventDefault()
                                    setArrayNumber(6)
                                }}
                                selected={arrayNumber === 6 ? true : false}
                            />
                            <FretButton
                                title={'Fifth String'}
                                onClick={event => {
                                    event.preventDefault()
                                    setArrayNumber(5)
                                }}
                                selected={arrayNumber === 5 ? true : false}
                            />
                            <FretButton
                                title={'Fourth String'}
                                onClick={event => {
                                    event.preventDefault()
                                    setArrayNumber(4)
                                }}
                                selected={arrayNumber === 4 ? true : false}
                            />
                            <FretButton
                                title={'Third String'}
                                onClick={event => {
                                    event.preventDefault()
                                    setArrayNumber(3)
                                }}
                                selected={arrayNumber === 3 ? true : false}
                            />
                            <FretButton
                                title={'Second String'}
                                onClick={event => {
                                    event.preventDefault()
                                    setArrayNumber(2)
                                }}
                                selected={arrayNumber === 2 ? true : false}
                            />
                            <FretButton
                                title={'First String'}
                                onClick={event => {
                                    event.preventDefault()
                                    setArrayNumber(1)
                                }}
                                selected={arrayNumber === 1 ? true : false}
                            />
                            {/* <input placeholder="Delay" /> */}
                        </div>
                    </>
                )
            })}
        </div>
    )
}

const determineArray = arrayNumber => {
    if (arrayNumber === 6) {
        return sixthString
    } else if (arrayNumber === 5) {
        return fifthString
    } else if (arrayNumber === 4) {
        return fourthString
    } else if (arrayNumber === 3) {
        return thirdString
    } else if (arrayNumber === 2) {
        return secondString
    } else if (arrayNumber === 1) {
        return firstString
    }
}

render(<App />, document.getElementById('root'))
