import React from 'react';
import {useSelector} from "react-redux";
import CardView from "../Components/CardView";
import Guarantor from "../Assets/Images/guarantor.jpg";
import Owner from "../Assets/Images/Owner.jpg";

export const GuarantorPage = () =>{

    // j'ai pas envie de fetch chaque fois le ownerArray
    const guarantorArray = useSelector(state => state.reducerPersonKey.allGuarantor);

    console.log(guarantorArray)
    return (
        <div className={"mainContainer"}>
            {guarantorArray.map((item, index) => {
                const arrayValue = [
                    `Civilité: ${item.civility}`,
                    `Sexe: ${item.sex}`,
                    `Adresse: ${item.address}`,
                    `Code postal: ${item.zipCode}`,
                    `Ville: ${item.city}`,
                    `Email: ${item.email}`,
                    `Pays: ${item.country}`,
                    `Numéro de gsm: ${item.gsmNumber}`
                ]
                return (
                    <CardView
                        key={index}
                        id={item.id}
                        typeItem={"Owner"}
                        imagePath={Owner}
                        title={item.firstName + " " + item.lastName}
                        subheader={item.birthDate}
                        cont={arrayValue}
                    />)
            })}
        </div>
    );
}