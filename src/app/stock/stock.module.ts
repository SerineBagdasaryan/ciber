import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StockComponent} from "./stock.component";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    StockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ]
})
export class StockModule { }
