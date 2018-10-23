import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    DashboardComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AboutComponent]
})
export class AppModule {}
