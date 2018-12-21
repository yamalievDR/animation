import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RepositoriesComponent } from './repositories/repositories.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/repositories', pathMatch: 'full'},
  {path: 'repositories', component: RepositoriesComponent, data: {animation: '1'}},
  {path: 'about', component: AboutComponent, data: {animation: '2'}},
  {path: 'contacts', component: ContactsComponent, data: {animation: '3'}},
  {path: '**', redirectTo: '/dashboard'}
];
