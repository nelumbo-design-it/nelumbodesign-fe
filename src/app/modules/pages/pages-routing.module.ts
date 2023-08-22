import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcessComponent } from './process/process.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'case-study', component: ProcessComponent, data: { breadcrumb: 'Case Study' } },
  {path: 'blog', component: BlogComponent, data: { breadcrumb: 'Blog' } },
  {path: 'blog/:id', component: BlogDetailsComponent, data: { breadcrumb: 'Blog Details' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
