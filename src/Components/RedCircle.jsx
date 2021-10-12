
function RedCircle({buttonText,backgroundColor, color}) {

    return (
        <div className='red-circle' style={{backgroundColor: backgroundColor}}>
            <button className='button-red'style={{backgroundColor: color}}>{buttonText}</button>
        </div>
    );
}
export default RedCircle;