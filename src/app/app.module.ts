import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';
import { ContactsComponent } from './contacts/contacts.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { CardComponent } from './shared/card/card.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    RepositoriesComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AboutComponent]
})
export class AppModule {
}
