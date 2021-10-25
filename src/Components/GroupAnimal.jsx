// function GroupAnimal({ fieldAnimal }) {
//     // cia bus CONDITIONAL RENDERINGAS

//     if ('cow' === fieldAnimal.animal) {
//         return (
//             <div className='cow'></div>

//         );
//     }
//     else if ('sheep' === fieldAnimal.animal) {
//         return (
//             <div className='sheep'></div>

//         );
//     }
//     else if ('horse' === fieldAnimal.animal) {
//         return (
//             <div className='horse'></div>

//         );
//     }
//     else {
//         // priesingu atveju nieko nerendinam, grazinam null
//         return null;
//     }


// }
// export default GroupAnimal;

import OneAnimal from "./OneAnimal";

function GroupAnimal({ fieldAnimal, field, goHome, addWeight }) {

    if (field === fieldAnimal.field && 'cow' === fieldAnimal.animal) {
        return (
            <div className='cow'>
                <OneAnimal goHome={goHome} addWeight={addWeight} fieldAnimal={fieldAnimal} />
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'sheep' === fieldAnimal.animal) {
        return (
            <div className='sheep'>
              <OneAnimal goHome={goHome} addWeight={addWeight} fieldAnimal={fieldAnimal} />
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'horse' === fieldAnimal.animal) {
        return (
            <div className='horse'>
                <OneAnimal goHome={goHome} addWeight={addWeight} fieldAnimal={fieldAnimal} />
            </div> 
        );
    }
    else {
        // priesingu atveju nieko nerendinam, grazinam null
        return null;
    }


}
export default GroupAnimal;