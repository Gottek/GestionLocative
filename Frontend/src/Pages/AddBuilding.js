import React, {useEffect} from 'react';
import "../CSS/AddBuilding.css";
import OutlinedButton from "../Components/OutlinedButton";
import RadioButtonsGroup from "../Components/RadioButton";
import {Field, Form} from "react-final-form";
import TextField from "@material-ui/core/TextField";
import "../CSS/AddPerson.css"
import {useDispatch, useSelector} from "react-redux";
import Divider from "@material-ui/core/Divider";
import {addBuilding, updateBuilding} from "../Store/Actions/BuildingAction";

export const AddBuildingPage = (props) => {
    const radioObject = [{name: "Chambre"}, {name: "Maison"}, {name: "Appartement"}]
    const [houseType, setHouseType] = React.useState('Chambre');
    const houseObject=useSelector(state=>state.reducerBuildingKey.allBuilding.find(item=>item.id===props.location.state?.id))

    const disptach = useDispatch();
    const onSubmit = event => {
        if(props.location.state){
            event.id=props.location.state.id;
            disptach(updateBuilding(event))
        }else(disptach(addBuilding(event)));
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
                                <Field type="radio"  subscription={{value: true}} name="type">{({input, meta}) =>
                                    <RadioButtonsGroup  valeur={{...input}} RadioObject={radioObject}
                                                        name={"type"}/>}
                                </Field>
                                <Field defaultValue={houseObject?.adress}  subscription={{value: true}} name="adress">{({input, meta}) =>
                                    <TextField fullWidth{...input} label={"Adresse"}
                                               variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject?.floor}  subscription={{value: true}} name="floor">{({input, meta}) =>
                                    <TextField type="number"  fullWidth{...input} label={"Etage"}
                                               variant="outlined"/>}
                                </Field>
                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field defaultValue={houseObject?.roomNumber} subscription={{value: true}}
                                       name="roomNumber">{({input, meta}) =>
                                    <TextField  type="number" fullWidth{...input} label={"Nombre de chambre"}
                                                variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject?.totalArea} subscription={{value: true}} name="totalArea">{({input, meta}) =>
                                    <TextField  type="number" fullWidth{...input} label={"Aire totale"}
                                                variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject?.roomArea} subscription={{value: true}} name="roomArea">{({input, meta}) =>
                                    <TextField  type="number" fullWidth{...input} label={"Aire par chambre"}
                                                variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject?.diningRoomArea} subscription={{value: true}} name="diningRoomArea">{({input, meta}) =>
                                    <TextField  type="number" fullWidth{...input} label={"Aire salle à manger"}
                                                variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject?.livingRoomArea} subscription={{value: true}} name="livingRoomArea">{({input, meta}) =>
                                    <TextField  type="number" fullWidth{...input} label={"Aire du salon"}
                                                variant="outlined"/>}
                                </Field>

                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field defaultValue={houseObject?.rentPrice} subscription={{value: true}} name="rentPrice">{({input, meta}) =>
                                    <TextField  type="number" fullWidth{...input} label={"Prix du loyer"}
                                                variant="outlined"/>}
                                </Field>
                                <Field defaultValue={houseObject?.flatRateCharges} subscription={{value: true}} name="flatRateCharges">{({input, meta}) =>
                                    <TextField  type="number" fullWidth{...input}
                                                label={"Prix des charges forfaitaires"}
                                                variant="outlined"/>}
                                </Field>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <OutlinedButton textValue={(houseObject)?"Modifier":"Ajouter"}/>
                    </div>
                </form>
            )}
        />
    );
}