// import axios from "axios";
// import { useEffect, useState } from "react";
// import CreateJewelry from "./Components/CreateJewelry";
// import JewelryList from "./Components/JewelryList";
// function App() {

//     const [allJewelries, setAllJewelries] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3003/jewelry')
//             .then(res => {
//                 setAllJewelries(res.data);
//                 console.log(res.data);
//             })
//     }, [])

//     return (
//         <div className='turtai'>
//             <CreateJewelry />
//             <JewelryList allJewelries={allJewelries} />
//         </div>
//     );
// }
// export default App;