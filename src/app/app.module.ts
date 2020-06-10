import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PromptsComponent } from './prompts/prompts.component';
import { FormsModule } from "@angular/forms";
import { CreateComponent } from './create/create.component';
import { CreatePromptDialogComponent } from './create-prompt-dialog/create-prompt-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PromptsComponent,
    CreateComponent,
    CreatePromptDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {
        path: '', component: PromptsComponent
      },
      {
        path: 'prompts', component: PromptsComponent
      },
      {
        path: 'create', component: CreateComponent
      }
    ]),
    BrowserAnimationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreatePromptDialogComponent]
})
export class AppModule { }
