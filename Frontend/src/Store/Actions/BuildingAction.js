import {addItem, deleteItem, getAllItems, updateItem} from "../../Api/api";

export const ADD_BUILDING = 'ADD_BUILDING';
export const DELETE_BUILDING = 'DELETE_BUILDING';
export const UPDATE_BUILDING = 'UPDATE_BUILDING';
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


export const deleteBuilding = (id) => {
    return async dispatch => {
        await deleteItem(id, "home");
        dispatch({type: DELETE_BUILDING, buildingId: id})
    }
}
export const updateBuilding = (home) => {
    return async dispatch => {
        await updateItem(home.id, "home", home);
        dispatch({type: UPDATE_BUILDING, newBuilding: home})
    }
}
