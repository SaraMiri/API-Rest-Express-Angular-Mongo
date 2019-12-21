import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaAddComponent } from './persona-add/persona-add.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'persona-list' },
  { path: 'add-persona', component: PersonaAddComponent },
  { path: 'edit-persona/:id', component: PersonaEditComponent },
  { path: 'persona-list', component: PersonaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
