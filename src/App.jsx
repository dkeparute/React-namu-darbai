import axios from "axios";
import { useEffect } from "react";
function App() {

    useEffect(() => {
        axios.get('http://localhost:3003/jewelry')
            .then(res => {
                console.log(res.data);
            })
    }, [])

    return (
        <div>

        </div>
    );
}
export default App;