import { Injectable } from '@angular/core';
import { Customer } from '../customer';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomersService {
    private baseUrl = '/api';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private externalApi = '/api'

    constructor(private http: Http) {

    }

    getCustomers(): Promise<Customer[]> {
        return this.http.get(this.baseUrl + '/customers').toPromise().then(response => {
            let json = response.json();
            return json as Customer[]
        }
        ).catch(this.handleError);
    }

    saveCustomers(customers: any[]): Promise<Customer[]> {
        return this.http.post(this.baseUrl + '/customers', JSON.stringify(customers), { headers: this.headers })
            .toPromise()
            .then(response => {
                let json = response.json();
                return json as Customer[]
            }
            ).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occcured', error);
        return Promise.reject(error.message || error);
    }

    verifyCustomer(customer: Customer): Promise<Boolean> {
        //The following is to made a REST call to the fictitious agency. To avoid error, simply comment the code and then just return true
        return this.http.get(this.externalApi + '/firstName/' + customer.firstName + '/lastName/' +
            customer.lastName + '/dateOfBirth/' + customer.dateOfBirth).toPromise().then(response => {
            //let json = response.json();
            //return json as Boolean
                return true
            }
        ).catch(this.handleError);
    }
}