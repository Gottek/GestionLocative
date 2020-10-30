import React from 'react';
import {useSelector} from "react-redux";
import CardView from "../Components/CardView";
import "../CSS/CardDisplay.css";
import Lease from "../Assets/Images/Lease.jpg"

export const LeasePage = () => {

    // pourquoi ce composant ce fait appeler deux fois
    const leaseArray = useSelector(state => state.reducerLeaseKey.allLease);
    const homeArray = useSelector(state => state.reducerBuildingKey.allBuilding);
    const ownerArray = useSelector(state => state.reducerPersonKey.allOwner);
    return (
        <div className={"mainContainer"}>
            {leaseArray.map((item, index) => {
                let houseObject = homeArray.find(items => items.id === item.homeId)
                let ownerObject = ownerArray.find(items => items.id === item.personId)
                const arrayValue = [
                    `Date de début de bail: ${JSON.stringify(item.leaseStartDate).substring(1, 11)}`,
                    `Datede fin de bail: ${JSON.stringify(item.leaseEndDate).substring(1, 11)}`,
                    `Durée du bail: ${item.leaseTerm}`,
                    `Index de base: ${item.baseIndex}`,
                    `Etages: ${item.floor}`,
                    `Charges: ${item.charges}`,
                    `Montant de la garantie: ${item.garanteeAmount}`,
                    `Date de la signature: ${JSON.stringify(item.signatureDate).substring(1, 11)}`,
                    `Index d'entré d'eau: ${item.waterMeterIndexInput}`,
                    `Index d'entre de gaz: ${item.gazMeterIndexInput}`,
                    `Index d'entre d'élécrticité: ${item.electricityMeterIndexInput}`,
                    `Caution payée: ${item.depositPaid}`,
                    `1er mois payé: ${item.firstMonthPaid}`,
                    `Date d'entré: ${JSON.stringify(item.entryDate).substring(1, 11)}`,
                    `Date de sortie: ${JSON.stringify(item.releaseDate).substring(1, 11)}`,
                    `Index de sortie d'eau: ${item.waterMeterIndexOutput}`,
                    `Index de sortie de gaz: ${item.gazMeterIndexOutput}`,
                    `Index de sortie d'électricité: ${item.electricityMeterIndexOutput}`,
                ]
                return (
                    <CardView
                        key={item.leaseId}
                        id={item.leaseId}
                        typeItem={"Lease"}
                        imagePath={Lease}
                        title={houseObject?.type + ": " + houseObject?.adress}
                        subheader={"Locataire: " + ownerObject?.firstName + " " + ownerObject?.lastName}
                        cont={arrayValue}
                    />)
            })}
        </div>
    );
}