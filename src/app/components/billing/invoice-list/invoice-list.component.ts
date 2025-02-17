import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice';
import { HttpClient } from "@angular/common/http";
import { CallService } from 'src/app/services/call.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'billing-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  @Input() page: number = 1;
  allChecked = false;
  http = inject(HttpClient)
  callService = inject(CallService)
  invoices: Invoice[] = []
  dataService = inject(DataService)


  ngOnInit() {
    this.getInvoiceListFromDB()
  }

  getInvoiceListFromDB(page: number = 1) {
    if(this.dataService.$config.value){

      this.http.get<Invoice[]>(`${this.dataService.$config.value["base_url"]}/todos?_limit=${this.dataService.$config.value["invoices_limit"]}&_page=${page}`)
        .subscribe(data => {
          this.invoices = data;
          this.invoices.map(invoice => {
            invoice.url = this.dataService.$config.value["dummy_pdf_url"]
            invoice.selected = false
            this.allChecked = false
          })
        });
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('page')) {
      this.getInvoiceListFromDB(changes['page'].currentValue)
    }
  }

  handleDownloadInvoice(invoice: Invoice) {
    window.open(invoice.url, '_blank')
  }

  handleCheckAll() {
    this.allChecked = !this.allChecked
    this.invoices.map(invoice => {
      invoice.selected = this.allChecked
    })
  }

  handleChangeCheckboxOnInvoice(invoice: Invoice) {
    invoice.selected = !invoice.selected
  }
  countSelectedInvoices(): number {
    return this.invoices.filter(invoice => invoice.selected).length
  }
  handleClickOnDownloadButton() {
    window.open(this.dataService.$config.value["dummy_zip_url"], '_blank')
  }
}
