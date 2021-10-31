import { useState } from "react";

function CreateJewelry() {

    const [inputs, setInputs] = useState({
        product: '',
        quantity: '',
        price: '',
        stock: '',
        order: ''
    })
    const control = (event, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = event.target.value;
        setInputs(inputsCopy);
    }

    return (
        <div className='inputs-turtas'>
            <span>Add product: </span> <div className='inputs'>
                <input type="text" value={inputs.product} onChange={(event) => control(event, 'product')} />
            </div>
            <span>Add quantity: </span> <div className='inputs'>
                <input type="text" value={inputs.quantity} onChange={(event) => control(event, 'quantity')} />
            </div>
            <span>Add price: </span> <div className='inputs'>
                <input type="text" value={inputs.price} onChange={(event) => control(event, 'price')} />
            </div>
            <span>Add stock: </span> <div className='inputs'>
                <input type="text" value={inputs.stock} onChange={(event) => control(event, 'stock')} />
            </div>
            <span>Add order: </span> <div className='inputs'>
                <input type="text" value={inputs.order} onChange={(event) => control(event, 'order')} />
            </div>
            <button>Add</button>
        </div>
    );
}
export default CreateJewelry;