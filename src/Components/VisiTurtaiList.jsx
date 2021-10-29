import VienasTurtas from "./VienasTurtas";
// 4. komponentui perduodamas propsas
function VisiTurtaiList({turtai}) {

    return (
        <div className='turtai-list'>
            {/* 5. rendinamai turtai ir sukuriamas naujas komponentas */}
       {turtai.map(animal => <VienasTurtas key={animal.id} animal={animal}></VienasTurtas>)}
        </div>
    );
}
export default VisiTurtaiList;