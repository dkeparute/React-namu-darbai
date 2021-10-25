import { useEffect, useState } from "react";
import GroupAnimal from "./Components/GroupAnimal";
import idGenerator from "./Common/idGenerator";

function App() {

    const [field, setField] = useState([]);

    const [fieldNumber, setFieldNumber] = useState(1);

    const [weight, setWeight] = useState('');

    const [fieldType, setFieldType] = useState('cow');

    const [date, setDate] = useState('');

    const handleWeight = event => {
        setWeight(event.target.value);
    }

    const handleDate = event => {
        setDate(event.target.value);
    }

    const selectFieldType = event => {
        setFieldType(event.target.value);
    }

    const add = () => {

        const fieldCopy = field.slice();

        fieldCopy.push({
            date: date,
            id: idGenerator(),
            animal: fieldType,
            weight: weight,
            field: parseInt(fieldNumber)
        });

        setField(fieldCopy);
        // NORINT JOG NEISSITRINTU INFORMACIJA
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
        console.log(fieldCopy);
    }

    const selectField = event => {
        setFieldNumber(event.target.value);
    }
    // NORINT JOG PASPAUDUS ISSITRINTU GYVULYS
    const goHome = (id) => {
        const fieldCopy = field.slice();
        const ind = fieldCopy.findIndex(e => e.id === id);
        fieldCopy.splice(ind, 1);
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }
    // NORINT JOG PASPAUDUS ISVALYTU VISA GRUPE GYVULIU
    const groupGoHome = (group) => {
        const fieldCopy = field.slice();
        while (true) {
            const ind = fieldCopy.findIndex(e => e.animal === group);
            if (ind < 0) {
                break;
            }
            fieldCopy.splice(ind, 1);
        }
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }

    // APP komponente reikalingas sniuriukas - svorio pridejimas

    const addWeight = (id, w) => {
        // susikuriam karviu kopija
        const fieldCopy = field.slice();
        // susirandam indeksa
        const i = fieldCopy.findIndex(e => e.id === id);
        // i ta indeksa savybeje weight irasome nauja svori
        fieldCopy[i].weight = parseFloat(w);
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }

    const addDate = (id, d) => {
        const fieldCopy = field.slice();
        const i = fieldCopy.findIndex(e => e.id === id);
        fieldCopy[i].date = d;
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy));
    }


    useEffect(() => {
        //  klausiame ar tu turi kokiu nors gyvuliu? Atsakymas bus null - nieko nera
        const animalsfromStorage = localStorage.getItem('animals');
        // jeigu yra gyvuliu, tada rasome:
        if (null !== animalsfromStorage) {
            // ir pasetinam i STATE
            setField(JSON.parse(animalsfromStorage));
        }
    }, []);


    return (
        <>
            <h1>FARM CRUD</h1>
            <div className='statistcis'>
                <h2>Statistics:</h2>
                <div className='buttons-holder'>
                    <button onClick={() => groupGoHome('cow')}>Home cow</button>
                    <button onClick={() => groupGoHome('sheep')}>Home sheep</button>
                    <button onClick={() => groupGoHome('horse')}>Home horse</button>
                </div>
            </div>
            <div className='field'>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={1} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight} addDate={addDate}></GroupAnimal>)}
                </div>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={2} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight} addDate={addDate}></GroupAnimal>)}
                </div>
                <div className='field_part'>

                    {field.map((fieldAnimal, i) => <GroupAnimal key={i} field={3} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight} addDate={addDate}></GroupAnimal>)}
                </div>
            </div>
            {/*NAUJO GYVUNO SUKURIMAS */}
            <div className='new'>
                <h3>Create new animal</h3>
                <span>Field Number</span>
                {/* LAUKO PASIRINKIMAS */}
                <select value={fieldNumber} onChange={selectField}>
                    <option value={1}>Field One</option>
                    <option value={2}>Field Two</option>
                    <option value={3}>Field Three</option>
                </select>
                <span>Animal type</span>
                {/*GYVULIO PASIRINKIMAS  */}
                <select value={fieldType} onChange={selectFieldType}>
                    <option value={'cow'}>Cow</option>
                    <option value={'sheep'}>Sheep</option>
                    <option value={'horse'}>Horse</option>
                </select>
                {/* SVORIO PRIDEJIMAS */}
                <span>Animal weight</span>
                <input type="text" onChange={handleWeight} value={weight} />
                <button onClick={add}>Add animal</button>
                {/* EDIMO LAIKO PRIDEJIMAS */}
                <span>Last feed time</span>
                <input className='date' type="date" onChange={handleDate} value={date} />
            </div>
            <div className='buttons-holder'>
                <button onClick={() => groupGoHome('cow')}>Home cow</button>
                <button onClick={() => groupGoHome('sheep')}>Home sheep</button>
                <button onClick={() => groupGoHome('horse')}>Home horse</button>
            </div>
        </>
    );
}
export default App;