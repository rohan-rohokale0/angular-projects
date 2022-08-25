import { EmployeeService } from './../../services/employee.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../Models/employee-models';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm!: FormGroup;
  employeeModel = new Employee();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  goToList() {
    this.router.navigate(['employee/employee-list']);
  }
  initForm() {
    this.addEmployeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      emails: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      address: ['', [Validators.required]],
    });
  }
  get getControl() {
    return this.addEmployeeForm.controls;
  }
  addEmployee() {
    const body: Employee = {
      name: this.addEmployeeForm.controls?.['name'].value,
      email: this.addEmployeeForm.controls?.['emails'].value,
      phoneNumber: this.addEmployeeForm.controls?.['phoneNumber'].value,
      address: this.addEmployeeForm.controls?.['address'].value,
    };
    debugger;
    this._employeeService.addEmployee(body).subscribe((res) => {
      this.router.navigate(['employee/employee-list']);
    });
  }
}
