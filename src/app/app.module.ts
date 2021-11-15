import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EducationComponent } from './pages/education/education.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HomeComponent } from './pages/home/home.component';
import { JobExperienceComponent } from './pages/job-experience/job-experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ResumeComponent,
    ProjectsComponent,
    JobExperienceComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    HobbiesComponent,
    StatisticsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PdfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
