import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, 
    HttpClientModule,
    MatFormFieldModule
  ]
})
export class HeaderModule { }
