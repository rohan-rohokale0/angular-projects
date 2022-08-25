import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}

  //Router object create on router
  ngOnInit(): void {}
  employee() {
    debugger
    this.router.navigate(['employee/employee-list']);
  }
  person() {
    debugger
    this.router.navigate(['person/person-list']);
  }
}
