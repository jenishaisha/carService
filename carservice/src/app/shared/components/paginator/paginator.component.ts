import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() dataSource!: any[];
  @Input() itemsPerPage!: number;
  @Output() filteredData = new EventEmitter<any>();

  public currentPageIndex = 0;
  private maxPageindex = 0;
  public pages:any = [];

  ngOnChanges(){
    this.setInitialPage();
  }

  private setInitialPage(){
    this.currentPageIndex = 0;
    this.maxPageindex = Math.ceil(this.dataSource.length/this.itemsPerPage);
    this.pages = new Array(this.maxPageindex);
    this.filteredData.emit(this.getCurrentPageData());
  }

  private getCurrentPageData(){
    const result = this.dataSource.slice(
      this.currentPageIndex*this.itemsPerPage,
      this.currentPageIndex*this.itemsPerPage + this.itemsPerPage
    )
    return result
  }

  public next(){
    if(this.currentPageIndex + 1 >= this.maxPageindex)
      return;
    this.currentPageIndex++;
    this.filteredData.emit(this.getCurrentPageData());
  }

  public previous(){
    if(this.currentPageIndex - 1 < 0)
      return;
    this.currentPageIndex--;
    this.filteredData.emit(this.getCurrentPageData());
  }

  public goToPage(pageIndex: number){
    this.currentPageIndex = pageIndex;
    this.filteredData.emit(this.getCurrentPageData());
  }
}
