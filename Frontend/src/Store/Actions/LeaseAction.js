import {addAPerson, deleteItem, getAllPersons} from "../../Api/api";

export const ADD_GUARANTOR = 'ADD_GUARANTOR';
export const ADD_OWNER = 'ADD_OWNER';
export const DELETE_GUARANTOR = 'DELETE_GUARANTOR';
export const DELETE_OWNER = 'DELETE_OWNER';
export const GET_ALL_GUARANTOR = 'GET_ALL_GUARANTOR';
export const GET_ALL_OWNER = 'GET_ALL_OWNER';
export const GET_PERSON = 'GET_PERSON';
export const PUT_ALL_PERSONS = 'PUT_ALL_PERSONS';

//
// export const addPerson = person => {
//     return async dispatch => {
//         const newPerson = await addAPerson(person);
//         const ACTION=(newPerson.nationalRegister) ? ADD_OWNER:ADD_GUARANTOR;
//         dispatch({type: ACTION, aSinglePerson: newPerson});
//     }
// }
// export const putAllPersons=()=>{
//     return async dispatch => {
//         const allPersonsArray = await getAllPersons();
//         dispatch({type: PUT_ALL_PERSONS, allPersons: allPersonsArray});
//     }
// }
//
// export const getPerson = id => ({type: GET_PERSON, aSinglePerson: id});

export const deleteLease = (id,typeItem) => {
    return async dispatch => {
        await deleteItem(id,"Owner");
        const ACTION =(typeItem==="Owner") ?DELETE_OWNER:DELETE_GUARANTOR;
        dispatch({type: ACTION, personId: id})
    }
}

