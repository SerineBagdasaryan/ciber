import { Component, OnInit } from '@angular/core';
import { StockService } from "./stock.service";
import { CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import { Observable } from "rxjs";
import { Stock } from "../interfaces/stock";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stockReports$!: Observable<Stock[]>;
  offset: number = 0;
  last: number = 10;
  constructor(private readonly _stockService: StockService) { }

  ngOnInit(): void {
    this._loadStockReports();
  }

  getDynamicIndex(index: number): number {
    return index + this.offset * this.last;
  }
  onDrop(event: CdkDragDrop<any[]>, stockReports: Stock[]): void {
    moveItemInArray(stockReports, event.previousIndex, event.currentIndex);
  }
  private _loadStockReports(): void {
    this.stockReports$ = this._stockService.getStockData(this.offset, this.last);
  }
  nextPage(): void {
    this.offset++;
    this._loadStockReports();
  }

  prevPage(): void {
    if (this.offset >= 0) {
      this.offset--;
      this._loadStockReports();
    }
  }
}
