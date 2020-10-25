import {ADD_BUILDING, DELETE_BUILDING, PUT_ALL_BUILDING} from "../Actions/BuildingAction";

const initialState = {
    allBuilding: []
};

export const BuildingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUILDING:
            const building = {...action.aSingleBuilding};
            const newAllBuilding = [...state.allBuilding];
            newAllBuilding.push(building);
            return {...state, allBuilding: newAllBuilding};
        case PUT_ALL_BUILDING:
            const allBuildingsArray = [...action.allBuilding]
            allBuildingsArray.forEach(item =>state.allBuilding.push(item));
            return state;
        case DELETE_BUILDING:
            const deletedBuildingArray =state.allBuilding.filter(value => value.id !== action.buildingId)
            return {...state, allBuilding: deletedBuildingArray};
        default:
            return state
    }
};

