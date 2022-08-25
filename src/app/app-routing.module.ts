import { PersonModule } from './Module/person/person.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () =>
      import('./Module/employee-module/employee-module.module').then(
        (m) => m.EmployeeModuleModule
      ),
  },
  {
    path: 'person',
    loadChildren: () =>
      import('./Module/person/person.module').then((m) => m.PersonModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
