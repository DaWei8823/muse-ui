import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, provideRoutes } from '@angular/router';
import { PromptsComponent } from './prompts/prompts.component';
import { FormsModule } from "@angular/forms";
import { CreateComponent } from './create/create.component';
import { CreatePromptDialogComponent } from './create-prompt-dialog/create-prompt-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PromptsComponent,
    CreateComponent,
    CreatePromptDialogComponent,
    LoginComponent
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
    BrowserAnimationsModule, 
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreatePromptDialogComponent]
})
export class AppModule { }
