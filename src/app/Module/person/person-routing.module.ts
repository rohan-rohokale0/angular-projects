import { PersonListComponent } from './components/person-list/person-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';

const routes: Routes = [
  {
    path: 'person-list',
    component: PersonListComponent,
  },
  {
    path: 'add-person',
    component: AddPersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
