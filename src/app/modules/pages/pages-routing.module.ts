import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'case-study', component: ProcessComponent, data: { breadcrumb: 'Case Study' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
