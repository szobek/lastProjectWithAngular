import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice';
import { HttpClient } from "@angular/common/http";
import { settings } from 'src/app/settings';
import { CallService } from 'src/app/services/call.service';

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

  ngOnInit() {
    this.getInvoiceListFromDB()
  }

  getInvoiceListFromDB(page: number = 1) {
    this.http.get<Invoice[]>(`${settings.BASE_URL}/todos?_limit=${settings.INVOICE_LIMIT}&_page=${page}`)
      .subscribe(data => {
        this.invoices = data;
        this.invoices.map(invoice => {
          invoice.url = settings.DUMMY_PDF_URL
   invoice.selected = false
   this.allChecked=false
        })
      });
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
    this.allChecked=!this.allChecked
    this.invoices.map(invoice => {
      invoice.selected = this.allChecked
    })
  }

  handleChangeCheckboxOnInvoice(invoice: Invoice) {
    invoice.selected = !invoice.selected
  }
  countSelectedInvoices():number { 
    return this.invoices.filter(invoice => invoice.selected).length
  }
  handleClickOnDownloadButton(){
    window.open(settings.DUMMY_ZIP_URL, '_blank')
  }
}
