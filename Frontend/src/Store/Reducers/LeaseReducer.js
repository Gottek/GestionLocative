import {ADD_LEASE, DELETE_LEASE, PUT_ALL_LEASE} from "../Actions/LeaseAction";

const initialState = {
    allLease: []
};

export const LeaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LEASE:
            const lease = {...action.aSingleLease};
            const newAllLease = [...state.allLease];
            newAllLease.push(lease);
            return {...state, allLease: newAllLease};
        case PUT_ALL_LEASE:
            const allLeasesArray = [...action.allLease]
            allLeasesArray.forEach(item => state.allLease.push(item));
            return state;
        case DELETE_LEASE:
            console.log("je suis dans le reducer");
            const deletedLeaseArray = state.allLease.filter(value => {
                console.log(value.leaseId + "----" + action.leaseId);
                return (value.leaseId !== action.leaseId)
            })
            console.log(deletedLeaseArray);
            return {...state, allLease: deletedLeaseArray};
        default:
            return state
    }
};

