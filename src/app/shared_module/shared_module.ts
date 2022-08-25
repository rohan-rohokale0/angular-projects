import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from '../Module/employee-module/services/employee.service';

@NgModule({
  imports: [ MatTableModule],
  declarations: [],
  exports: [ FormsModule, MatTableModule],
  providers: [EmployeeService],
})
export class SharedModule {}
