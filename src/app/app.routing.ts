import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

export const ROUTES: Routes = [
  {path: '', component: AppComponent, data: {animation:'intro'}},
  {path: 'about', component: AboutComponent, data: {animation: 'about'}},
  {path: 'contacts', component: ContactsComponent,  data: {animation: 'contacts'}},
  {path: '**', redirectTo: ''}
];
