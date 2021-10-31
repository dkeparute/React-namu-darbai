import JewelryItem from "./JewelryItem";

function JewelryList({allJewelries}) {

    return (
        <div className='turtai-list'>
            {allJewelries.map(oneJewelry => <JewelryItem key={oneJewelry.id} oneJewelry={oneJewelry}></JewelryItem>)}
        </div>
    );
}
export default JewelryList;