import axios from "axios";

export const addAPerson = async (person) => {
    let aPerson = {};
    await axios.post("http://localhost:5000/api/owner", person)
        .then(r => aPerson = r.data)
        .catch(err => console.log(err));

    return aPerson;
}
export const getAllPersons = async () => {
    let allPersons = {}
    await axios.get("http://localhost:5000/api/owner")
        .then(r => allPersons = r.data)
        .catch(err => console.log(err));

    return allPersons
}
export const deleteItem = async (id, item) => {
    const type = (item === "Owner" || item === "Guarantor") ? "owner" : "home";
    console.log(type);
    console.log(id);
    await axios.delete(`http://localhost:5000/api/${type}/${id}`)
        .then(r => console.log("delete OK"))
        .catch(err => console.log(err));
}