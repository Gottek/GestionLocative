import Person from "./Person";

class Guarantor extends Person {
    constructor(id, civility, sex, firstName, lastName, address, zipCode, city, country, email, gsmNumber) {
        super(id, civility, sex, firstName, lastName, address, zipCode, city, country, email, gsmNumber);

    }
}

export default Guarantor