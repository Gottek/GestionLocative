import {ADD_GUARANTOR, ADD_OWNER, DELETE_GUARANTOR, DELETE_OWNER, PUT_ALL_PERSONS} from "../Actions/PersonAction";

const initialState = {
    allGuarantor: [],
    allOwner: []
};

export const PersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GUARANTOR:
            const guarantor = {...action.aSinglePerson};
            const newAllGuarantor = [...state.allGuarantor];
            newAllGuarantor.push(guarantor);
            return {...state, allGuarantor: newAllGuarantor};
        case ADD_OWNER:
            const owner = {...action.aSinglePerson};
            const newAllOwner = [...state.allOwner];
            newAllOwner.push(owner);
            return {...state, allOwner: newAllOwner};
        case PUT_ALL_PERSONS:
            const allPersonsArray = [...action.allPersons]
            allPersonsArray.forEach(item => {
                if (item.nationalRegister) state.allOwner.push(item);
                else state.allGuarantor.push(item);
            });
            return state;
        case DELETE_OWNER:
            const deletedOwnerArray =state.allOwner.filter(value => value.id !== action.personId)
            return {...state, allOwner: deletedOwnerArray};
        case DELETE_GUARANTOR:
            return {};
        default:
            return state
    }
};

