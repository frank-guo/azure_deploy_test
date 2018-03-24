import { Component, Input, SimpleChanges, forwardRef, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
    @Input() public model: any;
    @Input() public onDeleteClick: Function;
    @Input() public onVerifyClick: Function;
    @Input() public index: number;

    submitted = false;
    onSubmit() { this.submitted = true; }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    ngAfterContentChecked() {
    }
}