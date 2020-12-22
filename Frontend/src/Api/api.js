import axios from "axios";

export const addItem = async (typeItem, object) => {
    let anItem = {};
    await axios.post(`http://localhost:5000/api/${typeItem}`, object)
        .then(r => anItem = r.data)
        .catch(err => console.log(err));
    console.log(anItem);
    console.log("grosse reussite");
    return anItem;
}
export const getAllItems = async (typeItem) => {
    let allItems = {}
    await axios.get(`http://localhost:5000/api/${typeItem}`)
        .then(r => allItems = r.data)
        .catch(err => console.log(err));
    return allItems
}

export const deleteItem = async (id, item) => {
    await axios.delete(`http://localhost:5000/api/${item}/${id}`)
        .then(r => console.log("delete OK"))
        .catch(err => console.log(err))
}

export const updateItem = async (id, item, object) => {
    await axios.put(`http://localhost:5000/api/${item}/${id}`, object)
        .then(r => console.log("update OK"))
        .catch(err => console.log(err));
}
export const createWord = async (lease, path) => {
    axios.post(`http://localhost:5000/api/lease/word/` + path, lease)
        .then(r => {
            window.open("http://localhost:5000/api/lease/download/" + path + lease.leaseId)
        })
        .catch(err => console.log(err));
}
