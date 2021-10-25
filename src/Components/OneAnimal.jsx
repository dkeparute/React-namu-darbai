import { useState } from "react";

function OneAnimal({ fieldAnimal, goHome, addWeight }) {

    const [weight, setWeight] = useState('');

    const handleWeight = event => {
        setWeight(event.target.value);
    }

    const submitWeight = () => {
        addWeight(fieldAnimal.id, weight);
        setWeight('');

    }
    return (
        <>
            <h2>Gyvulio ID: {fieldAnimal.id}</h2>
            <h2>Gyvulio svoris: {fieldAnimal.weight}</h2>
            <input type="text" onChange={handleWeight} value={weight} />
            <button className='btn' onClick={submitWeight}>Add</button>
            <button className='btn' onClick={() => goHome(fieldAnimal.id)}>Home</button>
        </>

    );
}
export default OneAnimal;