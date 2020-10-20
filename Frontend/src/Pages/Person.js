import React from 'react';
import CardView from "../Components/CardView";
import Owner from "../Assets/Images/Owner.jpg";
import "../CSS/CardDisplay.css"
import {useSelector} from "react-redux";

export const PersonPage = () => {
    // j'ai pas envie de fetch chaque fois le ownerArray
    const ownerArray = useSelector(state => state.reducerPersonKey.allOwner);
    // console.log(ownerArray)
    return (
        <div className={"mainContainer"}>
            {ownerArray.map((item, index) => {
                const arrayValue = [
                    `Civilité: ${item.civility}`,
                    `Sexe: ${item.sex}`,
                    `Adresse: ${item.address}`,
                    `Code postal: ${item.zipCode}`,
                    `Ville: ${item.city}`,
                    `Pays: ${item.country}`,
                    `Email: ${item.email}`,
                    `Age: ${item.age}`,
                    `Lieu de naissance: ${item.placeOfBirth}`,
                    `Date de naissance: ${item.birthDate}`,
                    `Numéro de registre: ${item.nationalRegister}`,
                    `Numéro de gsm: ${item.gsmNumber}`
                ]
                return (
                    <CardView
                        key={item.id}
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