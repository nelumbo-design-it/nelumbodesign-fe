import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcessComponent } from './process/process.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProcessComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PagesModule { }
