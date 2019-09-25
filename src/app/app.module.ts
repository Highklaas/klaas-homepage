import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule, Routes } from '@angular/router';
import { InViewportModule } from 'ng-in-viewport';
import { ContactFormComponent } from './contact-form/contact-form.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'services', component: ServicesComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    HomeComponent,
    ContactComponent,
    ReferencesComponent,
    ContactFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InViewportModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
