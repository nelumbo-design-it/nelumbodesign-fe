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




@NgModule({
  declarations: [
    ButtonAnimationComponent,
    TitleSectionComponent,
    SampleCardComponent,
    ProjectSectionComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
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
    ProjectSectionComponent
  ]
})
export class SharedModule { }
