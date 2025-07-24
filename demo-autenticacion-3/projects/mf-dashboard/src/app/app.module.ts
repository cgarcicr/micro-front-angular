import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Módulo para cuando se carga como microfrontend
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
      },
    ]),
  ],
  providers: [],
})
export class DashboardModule {}

// Módulo para cuando se ejecuta standalone
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
      },
    ]),
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
