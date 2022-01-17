import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EducationComponent } from './pages/education/education.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HomeComponent } from './pages/home/home.component';
import { JobExperienceComponent } from './pages/job-experience/job-experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'job-experience', component: JobExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
