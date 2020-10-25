import React, {useEffect, useState} from 'react';
import {Field, Form} from "react-final-form";
import TextField from "@material-ui/core/TextField";
import OutlinedButton from "../Components/OutlinedButton";
import {useDispatch, useSelector} from "react-redux";
import '../CSS/AddPerson.css'
import Selects from "../Components/Selects";
import Divider from "@material-ui/core/Divider";
import {number} from "prop-types";
import {addLease} from "../Store/Actions/LeaseAction";


export const AddLeasePage = () => {
    const personArray = useSelector(state => state.reducerPersonKey.allOwner);
    const homeArray = useSelector(state => state.reducerBuildingKey.allBuilding);
    const [houseObject,setHouseObject]=useState({adress:null, type:null, etage:null, rentPrice:0});
    const arrayNoYes=[{id:1,value:"OUI"}, {id:2,value:"NON"}];
    const disptach = useDispatch();

    console.log("je suis appeler");
    const onSubmit = event => {
        disptach(addLease(event));
    }
    const changeHouseID=(event)=> {
        const specificHouse=homeArray.find(item=>item.id===event);
        setHouseObject(specificHouse)
    }
    return (
        <Form
            onSubmit={onSubmit}
            subscription={{submitting: true}}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div className="MainContainer">
                        <div className="ColContainer">
                            <div className="ColContent">
                                <Field subscription={{value: true}} name="homeId">{({input, meta}) =>
                                    <Selects required fullWidth callBackValue={changeHouseID} arrayValue={homeArray}  {...input} label={"Adresse maison"} variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="personId">{({input, meta}) =>
                                    <Selects required fullWidth callBackValue={()=>{}} arrayValue={personArray}  {...input} label={"Nom personne"} variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}}  name="leaseStartDate">{({input, meta}) =>
                                    <TextField  required fullWidth {...input} label={"Date de début"}
                                               variant="outlined"/>}
                                </Field>
                                <Field  subscription={{value: true}} name="leaseEndDate">{({input, meta}) =>
                                    <TextField required {...input} fullWidth  label={"Date de fin"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="leaseTerm">{({input, meta}) =>
                                    <TextField required fullWidth {...input} label={"Durée du bien"}
                                               variant="outlined"/>}
                                </Field>
                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field defaultValue={houseObject.adress}  subscription={{value: true}} name="adress">{({input, meta}) =>
                                    <TextField required disabled={houseObject.adress!==null} fullWidth {...input} label={"Adresse"}
                                               variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject.type}  subscription={{value: true}} name="type">{({input, meta}) =>
                                    <TextField required disabled={houseObject.type!==null} fullWidth {...input} label={"Type"}
                                               variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject.floor} subscription={{value: true}} name="floor">{({input, meta}) =>
                                    <TextField required disabled={houseObject.floor!==null} fullWidth {...input} label={"Etage"}
                                               variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject.rentPrice} subscription={{value: true}} name="rentPrice">{({input, meta}) =>
                                    <TextField required disabled={houseObject.rentPrice!==null} fullWidth {...input} label={"Loyer"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="baseIndex">{({input, meta}) =>
                                    <TextField type="number" required fullWidth {...input} label={"Index de base"}
                                               variant="outlined"/>}
                                </Field>
                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field subscription={{value: true}} name="charges">{({input, meta}) =>
                                    <TextField type="number" required fullWidth {...input} label={"Charges"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="entryDate">{({input, meta}) =>
                                    <TextField required fullWidth {...input} label={"Date d'entrée"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="releaseDate">{({input, meta}) =>
                                    <TextField required fullWidth {...input} label={"Date de sortie"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="signatureDate">{({input, meta}) =>
                                    <TextField required fullWidth {...input} label={"Date de signature"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="waterMeterIndexInput">{({input, meta}) =>
                                    <TextField type="number" required fullWidth {...input}
                                               label={"Index entrée compteur eau"}
                                               variant="outlined"/>}
                                </Field>
                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field subscription={{value: true}} name="gazMeterIndexInput">{({input, meta}) =>
                                    <TextField type="number" required fullWidth {...input}
                                               label={"Index entrée compteur gaz"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}}
                                       name="electricityMeterIndexInput">{({input, meta}) =>
                                    <TextField type="number" required fullWidth {...input}
                                               label={"Index entrée compteur élec"} variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="depositPaid">{({input, meta}) =>
                                    <Selects required fullWidth callBackValue={()=>{}} arrayValue={arrayNoYes}  {...input} label={"Caution payée"} variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="depositPaymentDate">{({input, meta}) =>
                                    <TextField required fullWidth {...input}
                                               label={"Date de paiement caution"}
                                               variant="outlined"/>}
                                </Field>
                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field subscription={{value: true}} name="firstMonthPaid">{({input, meta}) =>
                                    <Selects required fullWidth callBackValue={()=>{}} arrayValue={arrayNoYes}  {...input} label={"1er mois payé"} variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject.rentPrice*2} subscription={{value: true}} name="garanteeAmount">{({input, meta}) =>
                                    <TextField required disabled={houseObject.rentPrice!==null} fullWidth {...input} label={"Montant de la garantie"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="waterMeterIndexOutput">{({input, meta}) =>
                                    <TextField type="number" required fullWidth {...input}
                                               label={"Index sortiecompteur eau"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="gazMeterIndexOutput">{({input, meta}) =>
                                    <TextField type="number" required fullWidth {...input}
                                               label={"Index sortiecompteur gaz"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}}
                                       name="electricityMeterIndexOutput">{({input, meta}) =>
                                    <TextField required {...input} fullWidth
                                               label={"Index sortiecompteur élec"}
                                               variant="outlined"/>}
                                </Field>

                            </div>
                        </div>
                        <div style={{width: "100%"}}>
                            <OutlinedButton/>
                        </div>
                    </div>
                </form>
            )}
        />
    );
}