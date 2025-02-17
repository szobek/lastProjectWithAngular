import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { settings } from 'src/app/settings';

@Component({
  selector: 'billing-invoice-paginator',
  templateUrl: './invoice-paginator.component.html',
  styleUrls: ['./invoice-paginator.component.scss']
})
export class InvoicePaginatorComponent {

  @Output('pageNumber') page: EventEmitter<number> = new EventEmitter()

  pages: number[] = []
  disablePrev: boolean = true
  disableNext: boolean = false
  pageNum: number = 1
  dataService = inject(DataService)
  router=inject(Router)

  constructor(private http: HttpClient) {
    this.getAllPgeFromDB()

  }

  handleClickOnPageNumber(page: number) {
    this.disableNext = false
    this.disablePrev = false
    this.page.emit(page)
    this.pageNum = page
    if (page === 1) this.disablePrev = true
    if (page === this.pages.length) this.disableNext = true
  }

  getAllPgeFromDB() {
    if(this.dataService.$config.value){

      this.http.get<any[]>(`${settings.BASE_URL}/todos`).subscribe({
        next: data => {
          for (let page of Array(data.length / this.dataService.$config.value["invoices_limit"])) {
            this.pages.push(page)
          }
        }
      })
    }else this.router.navigateByUrl("/")
  }

  handleClickOnPrevPage() {
    if(this.pageNum>1)this.pageNum--
    else this.pageNum=1
    this.page.emit(this.pageNum)
    if (this.pageNum >0 &&this.pageNum< this.pages.length) this.disableNext = false
    if (this.pageNum === 1) {
      this.disablePrev = true
      return
    }
  }

  handleClickOnNextPage() {
    if(this.pageNum<this.pages.length)this.pageNum++
    else this.pageNum=this.pages.length
    this.page.emit(this.pageNum)
    if (this.pageNum >1 &&this.pageNum< this.pages.length) this.disablePrev = false
    if (this.pageNum === this.pages.length) {
      this.disableNext = true
      return
    }
  }
}
