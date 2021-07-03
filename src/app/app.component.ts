import { Component, VERSION } from '@angular/core';

interface Customer {
  customerId: number;
  customerName: string;
  customerPhone: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  customers: Customer[] = [];
  constructor() {
    this.customers = [
      {
        customerId: 123,
        customerName: 'First Customer',
        customerPhone: 1234567890
      },
      {
        customerId: 234,
        customerName: 'Second Customer',
        customerPhone: 2234567890
      },
      {
        customerId: 345,
        customerName: 'Third Customer',
        customerPhone: 3234567890
      },
      {
        customerId: 456,
        customerName: 'Fourth Customer',
        customerPhone: 4234567890
      },
      {
        customerId: 567,
        customerName: 'Fifth Customer',
        customerPhone: 5234567890
      },
      {
        customerId: 678,
        customerName: 'Sixth Customer',
        customerPhone: 6234567890
      },
      {
        customerId: 789,
        customerName: 'Seventh Customer',
        customerPhone: 7234567890
      }
    ];
  }

  deleteCustomer(customer: Customer) {
    this.customers = this.customers.filter(
      element => element.customerId !== customer.customerId
    );
  }
}
