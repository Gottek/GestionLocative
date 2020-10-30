import React from 'react';
import {useSelector} from "react-redux";
import CardView from "../Components/CardView";
import Guarantor from "../Assets/Images/guarantor.jpg";

export const GuarantorPage = () => {

    // j'ai pas envie de fetch chaque fois le ownerArray
    const guarantorArray = useSelector(state => state.reducerPersonKey.allGuarantor);

    return (
        <div className={"mainContainer"}>
            {guarantorArray.map((item, index) => {
                const arrayValue = [
                    `Civilité: ${item.civility}`,
                    `Sexe: ${item.gender}`,
                    `Adresse: ${item.address}`,
                    `Code postal: ${item.zipCode}`,
                    `Ville: ${item.city}`,
                    `Email: ${item.email}`,
                    `Pays: ${item.country}`,
                    `Numéro de gsm: ${item.phoneNumber}`
                ]
                return (
                    <CardView
                        key={index}
                        id={item.id}
                        typeItem={"Guarantor"}
                        imagePath={Guarantor}
                        title={item.firstName + " " + item.lastName}
                        subheader={""}
                        cont={arrayValue}
                    />)
            })}
        </div>
    );
}