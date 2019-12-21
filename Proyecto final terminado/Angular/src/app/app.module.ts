import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaAddComponent } from './persona-add/persona-add.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaService } from './server/persona.service';
import { FormsModule } from '@angular/forms';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaListComponent,
    PersonaAddComponent,
    PersonaEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
