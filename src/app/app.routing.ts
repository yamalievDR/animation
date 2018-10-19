import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, data: {animation: '1'}},
  {path: 'about', component: AboutComponent, data: {animation: '2'}},
  {path: 'contacts', component: ContactsComponent, data: {animation: '3'}},
  {path: '**', redirectTo: ''}
];
