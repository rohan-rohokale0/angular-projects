import { Employee } from './../Models/employee-models';
import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiServer = environment.apiServer;

  constructor(private httpClient: HttpClient) {}
  addEmployee(body: Employee) {
    return this.httpClient.post(this.apiServer + '/Employee/addEmployee', body);
  }

  getEmployee() {
    debugger
    return this.httpClient.get(this.apiServer + '/Employee/getEmployee');
  }
}
