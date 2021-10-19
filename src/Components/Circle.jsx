import { useState } from "react";

function Circle() {

    const [counter, setCounter] = useState(0);
    const [counterNew, setCounterNew] = useState(0);

    const addNumber = () => {
        setCounter(counter + 1)
    }

    const addNewNumber = () => {
        setCounterNew(counterNew + counter)
    }

    const reset = () => {
        setCounter(0);
        setCounterNew(0);
    }

    return (
        <>
            <div className='circle'>
                <div className='counter'>{counter}</div>
                <button className='btn' onClick={() => addNumber()}>Spausti 1</button>
            </div>
            <div className='circle'>
                <div className='counter'>{counterNew}</div>
                <button onClick={addNewNumber}>Spausti 2</button>
                <button onClick={reset}>Atstatyti</button>
            </div>
        </>
    );
}
export default Circle;