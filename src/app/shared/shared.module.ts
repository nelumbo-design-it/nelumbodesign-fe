import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ButtonAnimationComponent } from './components/button-animation/button-animation.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { SampleCardComponent } from './components/sample-card/sample-card.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';


@NgModule({
  declarations: [
    ButtonAnimationComponent,
    TitleSectionComponent,
    SampleCardComponent,
    ProjectSectionComponent,
    FaqSectionComponent,
    TestimonialCardComponent,
    BlogCardComponent,
    BreadcrumbComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    RouterModule
  ], 
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ButtonAnimationComponent,
    TitleSectionComponent,
    SampleCardComponent,
    ProjectSectionComponent,
    FaqSectionComponent,
    MatExpansionModule,
    TestimonialCardComponent,
    MatGridListModule,
    BlogCardComponent,
    BreadcrumbComponent,
    TimelineComponent,
    RouterModule
  ]
})
export class SharedModule { }
