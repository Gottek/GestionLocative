import React from 'react';
import {useSelector} from "react-redux";
import CardView from "../Components/CardView";
import "../CSS/CardDisplay.css";
import House from "../Assets/Images/House.jpg"

export const BuildingPage = () => {

    // pourquoi ce composant se fait appeler deux fois
    const buildingArray = useSelector(state => state.reducerBuildingKey.allBuilding);
    return (
        <div className={"mainContainer"}>
            {buildingArray.map((item, index) => {
                const arrayValue = [
                    `Nombre d'étage: ${item.floor}`,
                    `Nombre de chambres: ${item.roomNumber}`,
                    `Aire totale: ${item.totalArea}`,
                    `Aire par chambre: ${item.roomArea}`,
                    `Aire du salon: ${item.livingRoomArea}`,
                    `Aire de la salle à manger: ${item.diningRoomArea}`,
                    `Prix des charges: ${item.flatRateCharges}`
                ]
                return (
                    <CardView
                        key={item.id}
                        id={item.id}
                        typeItem={"Home"}
                        imagePath={House}
                        title={item.type+": "+item.adress}
                        subheader={item.rentPrice + "€"}
                        cont={arrayValue}
                    />)
            })}
        </div>
    );
}