import React from "react";
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';

export default function DateTimePicker(props) {


    return (
        <MuiPickersUtilsProvider style={{width: "100%"}} utils={DateFnsUtils}>
            <KeyboardDatePicker
                inputVariant="outlined"
                margin="normal"
                id="date-picker-dialog"
                label={props.label}
                format="dd/MM/yyyy"
                {...props.valeur}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}





