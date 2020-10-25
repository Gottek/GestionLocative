import {addItem, deleteItem, getAllItems} from "../../Api/api";

export const ADD_LEASE = 'ADD_LEASE';
export const DELETE_LEASE = 'DELETE_LEASE';
export const GET_LEASE = 'GET_LEASE';
export const PUT_ALL_LEASE = 'PUT_ALL_LEASE';


export const addLease = lease => {
    return async dispatch => {
        const newLease = await addItem("lease",lease);
        dispatch({type: ADD_LEASE, aSingleLease: newLease});
    }
}
export const putAllLease = () => {
    return async dispatch => {
        const allLeaseArray = await getAllItems("lease");
        dispatch({type: PUT_ALL_LEASE, allLease: allLeaseArray});
    }
}

export const getLease = id => ({type: GET_LEASE, aSingleLease: id});

export const deleteLease = (id) => {
    return async dispatch => {
        console.log("je suis dans l'action avec l'id"+id);
        await deleteItem(id, "lease");
        dispatch({type: DELETE_LEASE, leaseId: id})
    }
}