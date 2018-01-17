import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from "@angular/material";
import { NavbarComponent } from './components/navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ChartFormComponent } from './components/chart-form/chart-form.component';
import { MainContainerComponent } from './components/main-container/main-container.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChartFormComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
