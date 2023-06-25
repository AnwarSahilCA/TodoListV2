import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsereventComponent } from './userevent/userevent.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './popup/popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './service/home/home.component';
import { CompletedeventComponent } from './completedevent/completedevent.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserdashComponent } from './userdash/userdash.component';




@NgModule({
  declarations: [
    AppComponent,UsereventComponent, SignupComponent, LoginComponent, PopupComponent, NavbarComponent, HomeComponent, CompletedeventComponent, UserdashComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSlideToggleModule, MatTableModule, 
    MatPaginatorModule, MatSortModule,MatFormFieldModule, 
    MatInputModule,HttpClientModule,MatIconModule,MatButtonModule,MatMenuModule,
    FormsModule, NgbModule,MatToolbarModule,MatButtonModule,
    MatIconModule,ReactiveFormsModule,MatSidenavModule,MatProgressBarModule
    ,MatCardModule,PaginationModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
