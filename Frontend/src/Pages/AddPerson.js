import React, {useState} from 'react';
import OutlinedButton from "../Components/OutlinedButton";
import {Field, Form} from 'react-final-form'
import "../CSS/AddPerson.css"
import TextField from "@material-ui/core/TextField";
import RadioButtonsGroup from "../Components/RadioButton";
import {useDispatch, useSelector} from "react-redux";
import {addPerson, updatePerson} from "../Store/Actions/PersonAction";
import Divider from "@material-ui/core/Divider";
import DateTimePicker from "../Components/DateTimePicker";


export const AddPersonPage = (props) => {
    const radioObjectCivilite = [{name: "Madame"}, {name: "Monsieur"}, {name: "Mademoiselle"}]
    const radioObject = [{name: "Homme"}, {name: "Femme"}]
    const radioObjectLoc = [{name: "Locataire"}, {name: "Garant"}]
    const [isOwner,setIsOwner]=useState(true);
    const ownerObject=useSelector(state=>state.reducerPersonKey.allOwner.find(item=>item.id===props.location.state?.id))
    const guarantorObject=useSelector(state=>state.reducerPersonKey.allGuarantor.find(item=>item.id===props.location.state?.id))

    //const formArray=[{name: ""}] solution a élaborer plus tard
    // faire en sorte que dès que je coche la case garant, le reste s'enlève
    const changementType=value=> setIsOwner((value.target.value === "Locataire"))
    const disptach = useDispatch();
    const onSubmit = event => {
        if(props.location.state){
            event.id=props.location.state.id;
            disptach(updatePerson(event,props.location.state.typePerson))
        }else(disptach(addPerson(event)));
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
                                {<RadioButtonsGroup valeur={{onChange: changementType}} RadioObject={radioObjectLoc}
                                                    name={"type"}/>}
                                <Field type="radio" subscription={{value: true}} name="civility">{({input, meta}) =>
                                    <RadioButtonsGroup valeur={{...input}} RadioObject={radioObjectCivilite}
                                                       name={"civility"}/>}
                                </Field>
                                <Field type="radio" subscription={{value: true}} name="gender">{({input, meta}) =>
                                    <RadioButtonsGroup valeur={{...input}} RadioObject={radioObject} name={"gender"}/>}
                                </Field>
                                <Field defaultValue={ownerObject?.firstName||guarantorObject?.firstName} subscription={{value: true}} name="firstName">{({input, meta}) =>
                                    <TextField fullWidth  {...input} id="outlined-basic" label={"Prénom"}
                                               variant="outlined"/>}
                                </Field>
                                <Field defaultValue={ownerObject?.lastName||guarantorObject?.lastName} subscription={{value: true}} name="lastName">{({input, meta}) =>
                                    <TextField fullWidth {...input} id="outlined-basic" label={"Nom"}
                                               variant="outlined"/>}
                                </Field>
                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field defaultValue={ownerObject?.zipCode||guarantorObject?.zipCode} subscription={{value: true}} name="zipCode">{({input, meta}) =>
                                    <TextField type="number" fullWidth {...input} id="outlined-basic" label={"Code postal"}
                                               variant="outlined"/>}
                                </Field>
                                <Field defaultValue={ownerObject?.city||guarantorObject?.city} subscription={{value: true}} name="city">{({input, meta}) =>
                                    <TextField fullWidth {...input} id="outlined-basic" label={"Ville"}
                                               variant="outlined"/>}
                                </Field>
                                {isOwner&&<Field defaultValue={ownerObject?.birthDate||"2000-01-01T18:25:43.511Z"} subscription={{value: true}}
                                                 name="birthDate">{({input, meta}) =>
                                    <DateTimePicker fullWidth valeur={{...input}} label={"Date de naissance"}
                                               variant="outlined"/>}
                                </Field>}
                                {isOwner&&<Field defaultValue={ownerObject?.age} subscription={{value: true}}
                                                 name="age">{({input, meta}) =>
                                    <TextField type="number" fullWidth {...input} id="outlined-basic" label={"Age"}
                                               variant="outlined"/>}
                                </Field>}
                                <Field defaultValue={ownerObject?.country||guarantorObject?.country} subscription={{value: true}} name="country">{({input, meta}) =>
                                    <TextField fullWidth {...input} id="outlined-basic" label={"Pays"}
                                               variant="outlined"/>}
                                </Field>

                            </div>
                            <Divider orientation="vertical" flexItem style={{margin: 20}}/>
                            <div className="ColContent">
                                <Field defaultValue={ownerObject?.address||guarantorObject?.address} subscription={{value: true}} name="address">{({input, meta}) =>
                                    <TextField fullWidth {...input} id="outlined-basic" label={"address"}
                                               variant="outlined"/>}
                                </Field>
                                {isOwner&&<Field defaultValue={ownerObject?.placeOfBirth} subscription={{value: true}}
                                                 name="placeOfBirth">{({input, meta}) =>
                                    <TextField fullWidth {...input} id="outlined-basic" label={"place de naissance"}
                                               variant="outlined"/>}
                                </Field>}
                                <Field defaultValue={ownerObject?.phoneNumber || guarantorObject?.phoneNumber}
                                       subscription={{value: true}} name="phoneNumber">{({input, meta}) =>
                                    <TextField fullWidth {...input} id="outlined-basic"
                                               label={"Numero de téléphone"}
                                               variant="outlined"/>}
                                </Field>
                                {isOwner&&<Field defaultValue={ownerObject?.nationalRegister} subscription={{value: true}}
                                                 name="nationalRegister">{({input, meta}) =>
                                    <TextField type="number" fullWidth {...input} id="outlined-basic"
                                               label={"Numéro national"}
                                               variant="outlined"/>}
                                </Field>}
                                <Field defaultValue={ownerObject?.email||guarantorObject?.email} subscription={{value: true}} name="email">{({input, meta}) =>
                                    <TextField fullWidth {...input} id="outlined-basic" label={"Email"}
                                               variant="outlined"/>}
                                </Field>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <OutlinedButton textValue={(ownerObject||guarantorObject)?"Modifier":"Ajouter"}/>
                    </div>
                </form>
            )}
        />
    )
}