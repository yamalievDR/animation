import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

export const ROUTES: Routes = [
  {path: '', component: AppComponent, data: {animation: '1'}},
  {path: 'about', component: AboutComponent, data: {animation: '2'}},
  {path: 'contacts', component: ContactsComponent, data: {animation: '3'}},
  {path: '**', redirectTo: ''}
];
