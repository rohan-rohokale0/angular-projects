import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeModuleRoutingModule } from './employee-module-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared_module/shared_module';

@NgModule({
  declarations: [EmployeeListComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
})
export class EmployeeModuleModule {}
