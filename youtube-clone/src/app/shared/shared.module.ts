import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputSearchComponent,
    ResultSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    InputSearchComponent,
    ResultSearchComponent
  ]
})
export class SharedModule { }
