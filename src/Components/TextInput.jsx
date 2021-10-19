import { useState } from "react";

function TextInput() {

    const [value, setValue] = useState('');

    const change = event => {
        setValue(event.target.value);
    }


    return(
        <div className= ''>
            <input onChange={change} type="text" value={value} />

        </div>
    );
}
export default TextInput;