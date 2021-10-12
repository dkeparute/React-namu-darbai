import BLueSquare from "./Components/BlueSquare";
import RedCircle from "./Components/RedCircle";


function App() {

    return (
        <div>
            <BLueSquare buttonText={'spausti'}/>
            <RedCircle buttonText={'spausti'} />
            <BLueSquare buttonText={'nespausti'} backgroundColor={'#72A6FF'} color={'#1043eb'}/>
            <RedCircle buttonText={'nespausti'} backgroundColor={'#FF9BAC'} color={'red'} />
        </div>

    );
}
export default App;