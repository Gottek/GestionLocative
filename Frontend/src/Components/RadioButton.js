import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtonsGroup(props) {
    return (
        <FormControl component="fieldset">
            <RadioGroup style={{display: "flex", flexDirection: "row"}} {...props.valeur} aria-label={props.name}
                        name={props.name}>
                {props.RadioObject.map((object, index) => (
                    <FormControlLabel value={object.name} control={<Radio/>} label={object.name} key={index}/>
                ))}
            </RadioGroup>
        </FormControl>

    );
}
