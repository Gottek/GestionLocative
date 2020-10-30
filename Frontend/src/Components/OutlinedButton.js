import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center"
    },
    buttonStyle: {
        width: "30%"
    }
}));


export default function OutlinedButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.buttonStyle} type="submit" variant="outlined" color="secondary"
                    startIcon={<AddIcon/>}>
                {props.textValue}
            </Button>
        </div>
    );
}
