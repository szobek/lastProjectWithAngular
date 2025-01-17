import { Component, Input, SimpleChanges } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice';
import { HttpClient } from "@angular/common/http";
import { settings } from 'src/app/settings';

@Component({
  selector: 'billing-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  @Input() page:number = 1;
  constructor(private http: HttpClient) {
  }
  
  invoices: Invoice[] = []
  
  ngOnInit() {
    this.getInvoiceListFromDB(3)
  }

  getInvoiceListFromDB(page: number = 1) {
    this.http.get<Invoice[]>(`${settings.BASE_URL}/todos?_limit=${settings.INVOICE_LIMIT}&_page=${page}`)
    .subscribe(data => {
      this.invoices = data;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.hasOwnProperty('page')){
     this.getInvoiceListFromDB(changes['page'].currentValue)
    }
  }
}
