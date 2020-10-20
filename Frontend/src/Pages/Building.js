import React from 'react';
import {useSelector} from "react-redux";
import CardView from "../Components/CardView";
import "../CSS/CardDisplay.css";
import House from "../Assets/Images/House.jpg"

export const BuildingPage = () => {

    // pourquoi ce composant ce fait appeler deux fois
    const allGuarantor = useSelector(state => state.reducerPersonKey.allGuarantor)
    const allOwner = useSelector(state => state.reducerPersonKey.allOwner)


    return (
        <div className={"mainContainer"}>
            <CardView imagePath={House}/>
            <CardView imagePath={House}/>
            <CardView imagePath={House}/>
            <CardView imagePath={House}/>
        </div>
    );
}