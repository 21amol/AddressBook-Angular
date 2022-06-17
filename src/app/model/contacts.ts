export class Contact {

    personId: number = 1;
    firstName: string = "";
    lastName: string = "";
    phoneNumber: string = "";
    email: string = "";
    address: string = "";
    city: string = "";
    state: string ="";
    zip: string = "";

    constructor(personId: number,  firstName: string, lastName: string, phoneNumber: string, email: string,
    address: string, city: string, state: string, zip: string ) {

        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip; 
    }
}