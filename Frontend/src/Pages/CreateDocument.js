import React, {useState} from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css'
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from "@material-ui/core/styles";
import {createWord} from "../Api/api";

export const CreateDocumentPage = () => {
    const classes = useStyles();
    const leaseArray = useSelector(state => state.reducerLeaseKey.allLease);
    const ownerArray = useSelector(state => state.reducerPersonKey.allOwner);
    const houseArray=useSelector(state=>state.reducerBuildingKey.allBuilding)
    const [printTypeFiles, setPrintTypeFiles] = useState([]);
    const columns = [
        {
            title: 'Id du bail',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Nom du locataire',
            dataIndex: 'locId',
            key: 'locId',
        },
        {
            title: 'Adresse maison',
            dataIndex: 'addressName',
            key: 'addressName',
        },

    ];

    const dataArray = leaseArray.map((item, index) => {
        const ownerPerson = ownerArray.find(itemO => itemO.id === item.personId);
        return ({
            key: (index+200*2),
            name: item.leaseId,
            locId: ownerPerson.firstName,
            addressName: item.adress,
            children: [
                {key: (index * 10) + 1,lease:item, parentId: item.leaseId, name: 'Contrat de bail'},
                {key: (index * 10) + 2,lease:item, parentId: item.leaseId, name: 'Caution pour la personne garante'},
                {key: (index * 10) + 3,lease:item, parentId: item.leaseId, name: "Etat des lieux d'entré"},
                {key: (index * 10) + 4,lease:item, parentId: item.leaseId, name: "Etat des lieux de sortie"},
                {key: (index * 10) + 5,lease:item, parentId: item.leaseId, name: 'Congé de bail'},
                {key: (index * 10) + 6,lease:item, parentId: item.leaseId, name: 'Résiliation anticipée du bail'},
            ]
        })
    })

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
        },
        onSelect: (record, selected, selectedRows) => {
            setPrintTypeFiles(selectedRows)
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            setPrintTypeFiles(selectedRows)
        }
    };
    const toPrint = () => {
        const array = printTypeFiles.filter(item => item.parentId);
        array.forEach(item=>{
            let thePath="";
            if(item.name==='Contrat de bail') thePath="ContratBail"
            else if(item.name==='Caution pour la personne garante') thePath="Caution"
            else if(item.name==="Etat des lieux d'entré") thePath="Entry"
            else if(item.name==="Etat des lieux de sortie") thePath="Release"
            else if(item.name==='Congé de bail') thePath="Holiday"
            else if(item.name==='Résiliation anticipée du bail') thePath="Cancellation"
            createWord(item.lease,thePath).then(r  =>console.log("le"));
        })
    }
    return (
        <>
            <Table
                columns={columns}
                rowSelection={{...rowSelection, checkStrictly: false}}
                dataSource={dataArray}
            />
            <div className={classes.root}>
                <Button className={classes.buttonStyle} onClick={toPrint} type="submit" variant="outlined"
                        color="secondary"
                        startIcon={<AddIcon/>}>
                    "Imprimer"
                </Button>
            </div>
        </>

    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center"
    },
    buttonStyle: {
        width: "30%"
    }
}));