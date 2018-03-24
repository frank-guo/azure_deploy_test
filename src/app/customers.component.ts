import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, ViewChild, SimpleChanges } from '@angular/core';
import { Customer } from './customer';
import { CustomersService } from './service/customers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { NgForm, FormArray } from '@angular/forms'

@Component({
    selector: 'customers',
    templateUrl: './customers.component.html',
    providers: [CustomersService]
})
export class CustomersComponent implements OnInit {
    customers: Customer[];
    public onDelete: Function;
    public onVerify: Function;

    constructor(private customersService: CustomersService,
        private route: ActivatedRoute,
        private location: Location,
        private cdRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.customersService.getCustomers())
            .subscribe(customers => this.customers = customers);
        this.route.params.subscribe(params => {
        })
        this.onDelete = this.onDeleteClick.bind(this)
        this.onVerify = this.onVerifyClick.bind(this)
    }

    ngAfterViewChecked() {
    }

    public onSaveClick(customers: FormArray): void {
        this.customersService.saveCustomers(this.customers)
    }

    public onVerifyClick(index: number): void {
        let customer = this.customers[index]
        let verified = this.customersService.verifyCustomer(customer)
        verified.then((verified) => { customer.verified = verified})
    }

    public onAddClick(): void {
        this.customers.push(new Customer());
    }

    public onDeleteClick(index): void {
        this.customers.splice(index, 1)
    }
}