import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PromptsComponent } from './prompts/prompts.component';

@NgModule({
  declarations: [
    AppComponent,
    PromptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {
        path: '', component: PromptsComponent
      },
      {
        path: 'prompts', component: PromptsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
