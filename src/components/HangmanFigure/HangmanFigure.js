import React, { useState, useRef, useEffect } from 'react'
import './Hangman.css';

const HangmanFigure = ({ points, message, newGame, isNotNewGame }) => {

    // const [remainingPoints, setRemainingPoints] = useState(points)
    // const [finalMessage, setFinalMessage] = useState(message)

    const ref10 = useRef(null);
    const ref9 = useRef(null);
    const ref8 = useRef(null);
    const ref7 = useRef(null);
    const ref6 = useRef(null);
    const ref5 = useRef(null);
    const ref4 = useRef(null);
    const ref3 = useRef(null);
    const ref2 = useRef(null);
    const ref1 = useRef(null);

    const isMatchingNumber = (ref, message) => {

        const firstClass = ref.current.classList[0];
        const filterNum = firstClass.replace(/\D/g, '');
        const matchingNum = filterNum > points;
        if (matchingNum) {
            ref.current.classList.add(`part-${filterNum}`);
        }
        if (newGame === true) {
            setTimeout(() => {
                ref.current.classList.remove(`part-${filterNum}`);
                isNotNewGame(false)
            }, 2);
        }

        return ref
    }

    useEffect(() => {

        // setRemainingPoints(points);
        isMatchingNumber(ref10, message)
        isMatchingNumber(ref9, message)
        isMatchingNumber(ref8, message)
        isMatchingNumber(ref7, message)
        isMatchingNumber(ref6, message)
        isMatchingNumber(ref5, message)
        isMatchingNumber(ref4, message)
        isMatchingNumber(ref3, message)
        isMatchingNumber(ref2, message)
        isMatchingNumber(ref1, message)

        // return () => {
        //     cleanup
        // }
    }, [points, message])


    return (
        <div id="hangman">
            <div className="lifes-10 top-bar" ref={ref10}></div>
            <div className="lifes-9 right-bar" ref={ref9}></div>
            <div className="lifes-8 left-bar" ref={ref8}></div>
            <div className="lifes-7 base" ref={ref7}></div>

            <div className="lifes-6 head" ref={ref6}></div>
            <div className="lifes-5 body" ref={ref5}></div>
            <div className="lifes-4 left-arm" ref={ref4}></div>
            <div className="lifes-3 right-arm" ref={ref3}></div>
            <div className="lifes-2 left-leg" ref={ref2}></div>
            <div className="lifes-1 right-leg" ref={ref1}></div>

            {/* <div className="clearfix"></div> */}
        </div>
    );
}

export default HangmanFigure;