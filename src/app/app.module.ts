import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegisterComponent,
  DashboardComponent,
  FooterComponent,
  NavbarComponent,
  SidebarComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  DashboardModule,
  FormsModule,
  AngularFireModule,
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule {}
