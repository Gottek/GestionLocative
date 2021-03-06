import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";
import {deletePerson} from "../Store/Actions/PersonAction";
import {deleteBuilding, deleteHome} from "../Store/Actions/BuildingAction";
import {deleteLease} from "../Store/Actions/LeaseAction";
import { useHistory } from "react-router-dom";
import "../CSS/CardView.css"

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function PersonalCard(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const deleteItem = (id, typeItem) => {
        if (typeItem === "Home") dispatch(deleteBuilding(id, typeItem))
        else if (typeItem === "Owner" || typeItem === "Guarantor") dispatch(deletePerson(id, typeItem))
        else dispatch(deleteLease(id, typeItem))
    }
    const redirection=(typeItem)=>{
        if(typeItem!=="Lease"){
        const path=(typeItem==="Home")?"/AddBuilding":"/AddPerson";
        const dataType=(typeItem==="Home"||typeItem==="Lease")?{id: props.id}:{id: props.id,typePerson:typeItem}
        history.push({pathname: path, state: dataType});
        }
    }
    return (
        <div>
            <Card className={"contentCard"} >
                <CardHeader
                    onClick={()=>redirection(props.typeItem)}
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    title={props.title}
                    subheader={props.subheader}
                />
                <CardMedia
                    onClick={()=>redirection(props.typeItem)}
                    className={classes.media}
                    image={props.imagePath}
                />

                <CardActions disableSpacing>
                    <IconButton aria-label="Delete" onClick={() => deleteItem(props.id, props.typeItem)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {
                            props.cont.map((item, index) => <Typography paragraph key={index}>{item}</Typography>)
                        }
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
