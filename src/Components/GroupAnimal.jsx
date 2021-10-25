// function GroupAnimal({ fieldAnimal }) {
//     // cia bus CONDITIONAL RENDERINGAS

import { useState } from "react";

//     if ('cow' === fieldAnimal.animal) {
//         return (
//             <div className='cow'></div>

//         );
//     }
//     else if ('sheep' === fieldAnimal.animal) {
//         return (
//             <div className='sheep'></div>

//         );
//     }
//     else if ('horse' === fieldAnimal.animal) {
//         return (
//             <div className='horse'></div>

//         );
//     }
//     else {
//         // priesingu atveju nieko nerendinam, grazinam null
//         return null;
//     }


// }
// export default GroupAnimal;

function GroupAnimal({ fieldAnimal, field, goHome, addWeight }) {
    // cia bus CONDITIONAL RENDERINGAS

    // UZDEDAMA KONTROLE

    const [weight, setWeight] = useState('');

    // priskiriamas svoris onChange
    const handleWeight = event => {
        setWeight(event.target.value);
    }
    // pridedamas svoris onClick
    const submitWeight = () => {
        addWeight(fieldAnimal.id, weight);
        // tam kad po setinimo butu tuscia
        setWeight('');

    }

    if (field === fieldAnimal.field && 'cow' === fieldAnimal.animal) {
        return (
            <div className='cow'>
                <h2>Gyvulio ID: {fieldAnimal.id}</h2>
                <h2>Gyvulio svoris: {fieldAnimal.weight}</h2>
                <input type="text" onChange={handleWeight} value={weight} />
                <button className='btn' onClick={submitWeight}>Add</button>
                <button className='btn' onClick={() => goHome(fieldAnimal.id)}>Home</button>
            </div>

        );
    }
    else if (field === fieldAnimal.field && 'sheep' === fieldAnimal.animal) {
        return (
            <div className='sheep'>
                <h2>Gyvulio ID:{fieldAnimal.id}</h2>
                <h2>Gyvulio svoris: {fieldAnimal.weight}</h2>
                <input type="text" onChange={handleWeight} value={weight} />
                <button className='btn' onClick={submitWeight}>Add</button>
                <button className='btn' onClick={() => goHome(fieldAnimal.id)}>Home</button>
            </div>

        );
    }
    else if (field === fieldAnimal.field && 'horse' === fieldAnimal.animal) {
        return (
            <div className='horse'>
                <h2>Gyvulio ID:{fieldAnimal.id}</h2>
                <h2>Gyvulio svoris: {fieldAnimal.weight}</h2>
                <input type="text" onChange={handleWeight} value={weight} />
                <button className='btn' onClick={submitWeight}>Add</button>
                <button className='btn' onClick={() => goHome(fieldAnimal.id)}>Home</button>
            </div>

        );
    }
    else {
        // priesingu atveju nieko nerendinam, grazinam null
        return null;
    }


}
export default GroupAnimal;