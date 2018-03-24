export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    verified: Boolean;
    constructor();
    constructor(id: number, firstName: string, lastName: string, dateOfBirth: Date, verified: Boolean);
    constructor(id?: number, firstName?: string, lastName?: string, dateOfBirth?: Date, verified?: Boolean) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.dateOfBirth = dateOfBirth;
        this.verified = verified;
    }
}