import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Shared/Models/employee';
import { BusinessManagementService } from '../Shared/Services/business-management.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  employee: Employee
  empoyeeIndex: number

  constructor(
    private route: ActivatedRoute,
    public businessManageMentService: BusinessManagementService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.params['id'];
    const employee = this.businessManageMentService.employeeRepository.find(employee => employee.name === name);
    const employeeIndex = this.businessManageMentService.employeeRepository.findIndex(employee => employee.name === name);
    this.employee = employee;
    this.empoyeeIndex = employeeIndex;
  }

}
