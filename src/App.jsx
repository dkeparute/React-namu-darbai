import axios from "axios";
import { useEffect, useState } from "react";
import VisiTurtaiList from "./Components/VisiTurtaiList";




function App() {
// 1. sukuriam hooka su db turtais
    const [turtai, setTurtai] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/turtai')
            .then(res => {
                //2. setinam turtu busena
                setTurtai(res.data)
                console.log(res.data);
            })
    }, [])

    return (
        <div className='turtai'>
{/* 3. turtai priskiriami kaip propsas ir sukuriamas naujas komponentas */}
            <VisiTurtaiList turtai={turtai}/>
        </div>
    );
}
export default App;