function JewelryItem({ oneJewelry }) {

    return (
        <div className='vienas-turtas'>
            <span>New product name: </span>
            <div className='naujas-turtas'>{oneJewelry.product}</div>
            <span>New quantity: </span>
            <div className='naujas-turtas'>{oneJewelry.quantity}</div>
            <span>New Price: </span>
            <div className='naujas-turtas'>{oneJewelry.price}</div>
            <span>New in stock info: </span>
            <div className='naujas-turtas'>{oneJewelry.stock}</div>
            <span>New order: </span>
            <div className='naujas-turtas'>{oneJewelry.order.slice(0,10)}</div>
        </div>
    );
}
export default JewelryItem;