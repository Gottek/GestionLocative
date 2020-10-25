import {addItem, deleteItem, getAllItems} from "../../Api/api";

export const ADD_BUILDING = 'ADD_BUILDING';
export const DELETE_BUILDING = 'DELETE_BUILDING';
export const GET_BUILDING = 'GET_BUILDING';
export const PUT_ALL_BUILDING = 'PUT_ALL_BUILDING';


export const addBuilding = building => {
    return async dispatch => {
        const newBuilding = await addItem("home", building);
        dispatch({type: ADD_BUILDING, aSingleBuilding: newBuilding});
    }
}
export const putAllBuilding = () => {
    return async dispatch => {
        const allBuildingArray = await getAllItems("home");
        dispatch({type: PUT_ALL_BUILDING, allBuilding: allBuildingArray});
    }
}

export const getBuilding = id => ({type: GET_BUILDING, aSingleBuilding: id});

export const deleteBuilding = (id) => {
    return async dispatch => {
        await deleteItem(id, "home");
        dispatch({type: DELETE_BUILDING, buildingId: id})
    }
}
