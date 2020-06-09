import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PromptsComponent } from './prompts/prompts.component';
import { FormsModule } from "@angular/forms"; 

@NgModule({
  declarations: [
    AppComponent,
    PromptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
