import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [
    MenuComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
