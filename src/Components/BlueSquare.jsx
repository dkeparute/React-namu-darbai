
function BlueSquare({buttonText, backgroundColor, color}) {

    return (
        <div className='blue-square'style={{backgroundColor: backgroundColor}}>
            <button className='button-blue' style={{background: color}}>{buttonText}</button>
        </div>
    );
}
export default BlueSquare;