import Person from "./Person";

class Owner extends Person{
    constructor({id, civility, sex, firstName, lastName, address, zipCode, city, country, birthDate, age, placeOfBirth, nationalRegister, email, phoneNumber}) {
        super(id,civility, phoneNumber, email, address, city, country, firstName, zipCode, sex, lastName);
        this.placeOfBirth=placeOfBirth;
        this.age=age;
        this.nationalRegister=nationalRegister;
        this.birthDate=birthDate;
    }
}
export default Owner