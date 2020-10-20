import React from 'react';
import OutlinedButton from "../Components/OutlinedButton";
import {Field, Form} from 'react-final-form'
import "../CSS/AddPerson.css"
import TextField from "@material-ui/core/TextField";
import RadioButtonsGroup from "../Components/RadioButton";
import {useDispatch} from "react-redux";
import {addPerson} from "../Store/Actions/PersonAction";
import Owner from "../Models/Owner";
import Guarantor from "../Models/Guarantor";


export const AddPersonPage = () => {
    const radioObjectCivilite = [{name: "Madame"}, {name: "Monsieur"}, {name: "Mademoiselle"}]
    const radioObject = [{name: "Homme"}, {name: "Femme"}]
    const radioObjectLoc = [{name: "Locataire"}, {name: "Garant"}]

    //const formArray=[{name: ""}] solution a élaborer plus tard
    // faire en sorte que dès que je coche la case garant, le reste s'enlève
    const disptach = useDispatch();
    const onSubmit = event => {
        disptach(addPerson(event));
    }
    return (
        <Form
            onSubmit={onSubmit}
            subscription={{submitting: true}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div className="MainContainer">
                        <div className="ColContainer">
                            <div className="ColContent">
                                <Field type="radio" subscription={{value: true}} name="civility">{({input, meta}) =>
                                    <RadioButtonsGroup valeur={{...input}} RadioObject={radioObjectCivilite}
                                                       name={"civility"}/>}
                                </Field>
                                <Field type="radio" subscription={{value: true}} name="gender">{({input, meta}) =>
                                    <RadioButtonsGroup valeur={{...input}} RadioObject={radioObject} name={"gender"}/>}
                                </Field>
                                <Field subscription={{value: true}} name="firstName">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Prénom"} variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="lastName">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Nom"} variant="outlined"/>}
                                </Field>
                                {/*<Field type="radio" subscription={{value: true}} name="personType">{({input, meta}) =>*/}
                                {/*    <RadioButtonsGroup valeur={{...input}} RadioObject={radioObjectLoc} name={"type"}/>}*/}
                                {/*</Field>*/}
                            </div>
                            <div className="ColContent">
                                <Field subscription={{value: true}} name="zipCode">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Code postal"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="city">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Ville"} variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="birthDate">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Date de naissance"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="age">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Age"} variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="country">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Pays"} variant="outlined"/>}
                                </Field>

                            </div>
                            <div className="ColContent">
                                <Field subscription={{value: true}} name="address">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"address"} variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="placeOfBirth">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"place de naissance"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="phoneNumber">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Numero de téléphone"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="nationalRegister">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Numéro national"}
                                               variant="outlined"/>}
                                </Field>
                                <Field subscription={{value: true}} name="email">{({input, meta}) =>
                                    <TextField {...input} id="outlined-basic" label={"Email"} variant="outlined"/>}
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
    )
}