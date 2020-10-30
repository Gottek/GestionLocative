import {addItem, deleteItem, getAllItems, updateItem} from "../../Api/api";

export const ADD_GUARANTOR = 'ADD_GUARANTOR';
export const ADD_OWNER = 'ADD_OWNER';
export const DELETE_GUARANTOR = 'DELETE_GUARANTOR';
export const DELETE_OWNER = 'DELETE_OWNER';
export const UPDATE_OWNER = 'UPDATE_OWNER';
export const UPDATE_GUARANTOR = 'UPDATE_GUARANTOR';
export const GET_PERSON = 'GET_PERSON';
export const PUT_ALL_PERSONS = 'PUT_ALL_PERSONS';


export const addPerson = person => {
    return async dispatch => {
        const newPerson = await addItem("owner",person);
        const ACTION = (newPerson.nationalRegister) ? ADD_OWNER : ADD_GUARANTOR;
        dispatch({type: ACTION, aSinglePerson: newPerson});
    }
}
export const putAllPersons = () => {
    return async dispatch => {
        const allPersonsArray = await getAllItems("owner");
        dispatch({type: PUT_ALL_PERSONS, allPersons: allPersonsArray});
    }
}


export const deletePerson = (id, typeItem) => {
    return async dispatch => {
        await deleteItem(id, "owner");
        const ACTION = (typeItem === "Owner") ? DELETE_OWNER : DELETE_GUARANTOR;
        dispatch({type: ACTION, personId: id})
    }
}
export const updatePerson = (person,type) => {
    return async dispatch => {
        await updateItem(person.id, "owner",person);
        const ACTION = (type==="Owner") ? UPDATE_OWNER : UPDATE_GUARANTOR;
        dispatch({type: ACTION, newPersonUpdated: person})
    }
}


