import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EducationComponent } from './pages/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HomeComponent } from './pages/home/home.component';
import { JobExperienceComponent } from './pages/job-experience/job-experience.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    FooterComponent,
    HobbiesComponent,
    HomeComponent,
    JobExperienceComponent,
    NavBarComponent,
    ProjectsComponent,
    ResumeComponent,
    StatisticsComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, PdfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
