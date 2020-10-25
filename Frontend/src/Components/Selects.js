import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Selects(props) {
    const classes = useStyles();
    // const [id, setId] = React.useState();
    const handleChange = (event) => {
        props.onChange(event);
        props.callBackValue(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.value}
                onChange={handleChange}
                label={props.label}
            >
                {props.arrayValue.map(item => <MenuItem value={item.value || item.id}
                                                        key={item.id}>{item.adress || item.firstName || item.value}</MenuItem>)}
            </Select>
        </FormControl>
    );
}