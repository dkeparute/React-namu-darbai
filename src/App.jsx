import BlueSquare from "./Components/BlueSquare";
import RedCircle from "./Components/RedCircle";

function App() {

    return (
        <div>
            <BlueSquare buttonText={'spausti'} />
            <RedCircle buttonText={'spausti'} />
            <BlueSquare buttonText={'nespausti'} backgroundColor={'#72A6FF'} color={'#1043eb'} />
            <RedCircle buttonText={'nespausti'} backgroundColor={'#FF9BAC'} color={'red'} />
        </div>

    );
}
export default App;