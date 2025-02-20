import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume.component').then(m => m.ResumeComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-form/contact-form.component').then(m => m.ContactFormComponent)
  }
];
