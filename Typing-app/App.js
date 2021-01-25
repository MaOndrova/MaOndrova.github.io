import React from "react"
import useWordGame from "./useWordGame"

function App() {
   
    const {text, timeRemaining, isTimeRunning, wordCount,
         handleChange, textBoxRef, startGame} = useWordGame(30)
    return (     
        <div className="container">
            <h1>How fast do you type?</h1>
            <p>To be, or not to be: that is the question:
            Whether ’tis nobler in the mind to suffer
            The slings and arrows of outrageous fortune,
            Or to take arms against a sea of troubles,
            And by opposing end them? To die: to sleep;
            No more; and, by a sleep to say we end
            The heart-ache and the thousand natural shocks
            That flesh is heir to, ’tis a consummation
            Devoutly to be wish’d. To die, to sleep;
            To sleep: perchance to dream: ay, there’s the rub.</p>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}
export default App
