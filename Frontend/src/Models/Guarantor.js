import Person from "./Person";

class Guarantor extends Person {
    constructor(id, civility, gender, firstName, lastName, address, zipCode, city, country, email, phoneNumber) {
        super(id, civility, gender, firstName, lastName, address, zipCode, city, country, email, phoneNumber);

    }
}

export default Guarantor