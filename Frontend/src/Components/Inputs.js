import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {},
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {},
    textFieldBasic: {
        width: "40%"
    }
}));

export default function InputAdornments(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };


    return (
        <div className={classes.root}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    value={values.weight}
                    onChange={handleChange('weight')}
                    endAdornment={<InputAdornment position="end">{props.text}</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{'aria-label': 'weight',}}
                    labelWidth={0}
                />
            </FormControl>
        </div>
    );
}


export const InputPriceFullWidth = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">{props.text}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                    labelWidth={props.labelWidth}
                />
            </FormControl>
        </div>
    );
}

export const BasicTextFields = (props) => {
    return (
        <TextField name={props.name} value={props.value} onChange={props.onChange} id="outlined-basic"
                   label={props.labelo} variant="outlined"/>);
}
