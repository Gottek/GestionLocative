import React from 'react';
import './CSS/App.css';
import MiniDrawer from "./Components/Navigation";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {PersonReducer} from "./Store/Reducers/PersonReducer";
import ReduxThunk from 'redux-thunk';

function App() {
    const rootReducer = combineReducers({
        reducerPersonKey: PersonReducer,
        //reducerBuildingKey:BuildingReducer
    });
    const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <Router>
                <MiniDrawer/>
            </Router>
        </Provider>
    );
}

export default App;
