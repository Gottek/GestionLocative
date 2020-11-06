import Person from "./Person";

class Guarantor extends Person {
    constructor(id, civility, gender, firstName, lastName, address, zipCode, city, country, email, phoneNumber,ownerInCharge) {
        super(id, civility, gender, firstName, lastName, address, zipCode, city, country, email, phoneNumber);
        this.ownerInCharge=ownerInCharge

    }
}

export default Guarantor