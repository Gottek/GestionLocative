import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import ApartmentIcon from '@material-ui/icons/Apartment';
import DescriptionIcon from '@material-ui/icons/Description';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {Link, Route} from "react-router-dom";
import {BuildingPage} from "../Pages/Building";
import {AddBuildingPage} from "../Pages/AddBuilding";
import {PersonPage} from "../Pages/Person";
import {AddPersonPage} from "../Pages/AddPerson";
import {LeasePage} from "../Pages/Lease";
import {AddLeasePage} from "../Pages/AddLease";
import {GuarantorPage} from "../Pages/Guarantor";
import {CreateDocumentPage} from "../Pages/CreateDocument";
import {useDispatch} from "react-redux";
import {putAllPersons} from "../Store/Actions/PersonAction";
import {putAllBuilding} from "../Store/Actions/BuildingAction";
import {putAllLease} from "../Store/Actions/LeaseAction";
import GetAppIcon from '@material-ui/icons/GetApp';

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor:"#2d3436",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        backgroundColor:"#2d3436",
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',

        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    linkDecoration:{
        textDecoration: 'none',
        color:"#2d3436"
    }
}));


const iconRedirection =[
    {"id":1,"Name":"Batiments","Component": <HomeWorkIcon/>, "Redirect":""},
    {"id":2,"Name":"Ajouter Batiments","Component": <ApartmentIcon/>, "Redirect":"AddBuilding"},
    {"id":3,"Name":"Personnes","Component": <PersonIcon />, "Redirect":"Person"},
    {"id":4,"Name":"Ajouter Personnes","Component": <PersonAddIcon/>, "Redirect":"AddPerson"},
    {"id":5,"Name":"Baux","Component": <DescriptionIcon/>, "Redirect":"Lease"},
    {"id":6,"Name":"Ajouter Baux","Component": <NoteAddIcon/>, "Redirect":"AddLease"},
    {"id":7,"Name":"Garants","Component": <PeopleIcon/>, "Redirect":"Guarantor"},
    {"id":8,"Name":"Télécharger docx","Component": <GetAppIcon/>, "Redirect":"CreateDocument"},
]


export default function MiniDrawer() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(putAllBuilding());
        dispatch(putAllPersons());
        dispatch(putAllLease());
    },[dispatch])

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography color={"secondary"} variant="h6" noWrap>
                        Gestion locative
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List >
                    {iconRedirection.map((object, index) => (
                        <Link to={`/${object.Redirect}`}  className={classes.linkDecoration} key={index} >
                            <ListItem style={{marginTop:"20%",marginBottom:"20%"}} button  >
                                <ListItemIcon>{object.Component}</ListItemIcon>
                                <ListItemText  primary={object.Name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                    <Route path="/" exact component={BuildingPage}/>
                    <Route path="/AddBuilding" exact component={AddBuildingPage}/>
                    <Route path="/Person" exact component={PersonPage}/>
                    <Route path="/AddPerson" exact component={AddPersonPage}/>
                    <Route path="/Lease" exact component={LeasePage}/>
                    <Route path="/AddLease" exact component={AddLeasePage}/>
                    <Route path="/Guarantor" exact component={GuarantorPage}/>
                    <Route path="/CreateDocument" exact component={CreateDocumentPage}/>
            </main>
        </div>
    );
}
