import React from 'react';
import "../CSS/AddBuilding.css";
import OutlinedButton from "../Components/OutlinedButton";
import RadioButtonsGroup from "../Components/RadioButton";
import {Field, Form} from "react-final-form";
import TextField from "@material-ui/core/TextField";
import "../CSS/AddPerson.css"
import {useDispatch} from "react-redux";
import Divider from "@material-ui/core/Divider";
import {addBuilding} from "../Store/Actions/BuildingAction";

export const AddBuildingPage = () => {
    const radioObject = [{name: "Chambre"}, {name: "Maison"}, {name: "Appartement"}]
    const [houseType, setHouseType] = React.useState('Chambre');

    const disptach = useDispatch();
    const onSubmit = event => {
        console.log(event);
        disptach(addBuilding(event));
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
                                <Field type="radio" subscription={{value: true}} name="type">{({input, meta}) =>
                                    <RadioButtonsGroup valeur={{...input}} RadioObject={radioObject}
                                                       name={"type"}/>}
                                </Field>
                                <Field subscription={{value: true}} name="adress">{({input, meta}) =>
                                    <TextField fullWidth{...input} label={"Adresse"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="floor">{({input, meta}) =>
                                    <TextField type="number"  fullWidth{...input} label={"Etage"}
                                               variant="outlined"/>}
                                </Field>
                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field subscription={{value: true}}
                                       name="roomNumber">{({input, meta}) =>
                                    <TextField type="number" fullWidth{...input} label={"Nombre de chambre"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="totalArea">{({input, meta}) =>
                                    <TextField type="number" fullWidth{...input} label={"Aire totale"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="roomArea">{({input, meta}) =>
                                    <TextField type="number" fullWidth{...input} label={"Aire par chambre"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="diningRoomArea">{({input, meta}) =>
                                    <TextField type="number" fullWidth{...input} label={"Aire salle à manger"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="livingRoomArea">{({input, meta}) =>
                                    <TextField type="number" fullWidth{...input} label={"Aire du salon"}
                                               variant="outlined"/>}
                                </Field>

                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field subscription={{value: true}} name="rentPrice">{({input, meta}) =>
                                    <TextField type="number" fullWidth{...input} label={"Prix du loyer"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="flatRateCharges">{({input, meta}) =>
                                    <TextField type="number" fullWidth{...input}
                                               label={"Prix des charges forfaitaires"}
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
        // <div className="MainContainer">
        //     <RadioButtonsGroup callBackRadio={value => setHouseType(value)} RadioObject={radioObject}/>
        //     <BasicTextFieldsfullWidth labelo={"Adresse"}/>
        //     <InputAdornments text={"Chambre"}/>
        //     {houseType === "Appartement" && <InputAdornments text={"Etage"}/>}
        //     <BasicTextFieldsfullWidth labelo={"Superficie totale"}/>
        //     <BasicTextFields labelo={"Superficie de chaque chambre"}/>
        //     <BasicTextFields labelo={"Superficie du salon"}/>
        //     <BasicTextFields labelo={"Superficie de la salle à manger"}/>
        //     <BasicTextFields labelo={"Supercifie de la cuisine"}/>
        //     <InputPriceFullWidth labelWidth={90} text={"Prix du loyer"}/>
        //     <InputPriceFullWidth labelWidth={200} text={"Prix des charges forfaitaires"}/>
        //     <div style={{width: "100%"}}>
        //         <OutlinedButtons/>
        //     </div>
        // </div>
    );
}