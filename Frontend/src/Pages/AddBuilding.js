import React from 'react';
import InputAdornments, {BasicTextFields, InputPriceFullWidth} from "../Components/Inputs";
import "../CSS/AddBuilding.css";
import OutlinedButtons from "../Components/OutlinedButton";
import RadioButtonsGroup from "../Components/RadioButton";

export const AddBuildingPage = () => {
    const radioObject = [{name: "Chambre"}, {name: "Maison"}, {name: "Appartement"}]
    const [houseType, setHouseType] = React.useState('Chambre');

    console.log(houseType)
    return (
        <div className="MainContainer">
            <RadioButtonsGroup callBackRadio={value => setHouseType(value)} RadioObject={radioObject}/>
            <BasicTextFields labelo={"Adresse"}/>
            <InputAdornments text={"Chambre"}/>
            {houseType === "Appartement" && <InputAdornments text={"Etage"}/>}
            <BasicTextFields labelo={"Superficie totale"}/>
            <BasicTextFields labelo={"Superficie de chaque chambre"}/>
            <BasicTextFields labelo={"Superficie du salon"}/>
            <BasicTextFields labelo={"Superficie de la salle à manger"}/>
            <BasicTextFields labelo={"Supercifie de la cuisine"}/>
            <InputPriceFullWidth labelWidth={90} text={"Prix du loyer"}/>
            <InputPriceFullWidth labelWidth={200} text={"Prix des charges forfaitaires"}/>
            <div style={{width: "100%"}}>
                <OutlinedButtons/>
            </div>
        </div>
    );
}