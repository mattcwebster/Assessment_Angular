import { Component, OnInit } from '@angular/core';
import { BusinessManagementService } from '../Shared/Services/business-management.service';
import { faPlus, IconDefinition, faEdit } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Employee } from '../Shared/Models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  /** font awesom icons */
  faPlus: IconDefinition = faPlus;
  faEdit: IconDefinition = faEdit;
  faClose: IconDefinition = faWindowClose;
  /** form controls */
  createNewEmployeeForm: FormGroup;
  showCreateNewEmployee = false;
  newEmployeeSubmitted = false;
  currentEditID = -1;

  constructor(
    public businessManagementService: BusinessManagementService
  ) {
    this.createNewEmployeeForm = this.createFormControl()
  }

  ngOnInit() {

  }

  /** create reactive Form controls */
  private createFormControl() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      profilePicUri: new FormControl('', [Validators.required]),
      directPhone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      fax: new FormControl(''),
      title: new FormControl(''),       
      cell: new FormControl(''),
      home: new FormControl(''),
      homeFax: new FormControl(''),
      homeEmail: new FormControl(''),
      status: new FormControl(''),
    });
  }

  /**
   * toggles CreateNewEmployee form
   */
  showCreateNewForm() {
    this.showCreateNewEmployee = !this.showCreateNewEmployee;
    if (!this.showCreateNewEmployee) {
      this.currentEditID = -1;
      this.createNewEmployeeForm.reset();
    }
  }
  /**
   * creates new empoyee
   */
  createNewEmployee() {
    if (this.currentEditID !== -1) {
      const employee = this.businessManagementService.employeeRepository[this.currentEditID];

      employee.name = this.createNewEmployeeForm.controls['name'].value;
      employee.profilePicUri = this.createNewEmployeeForm.controls['profilePicUri'].value;
      employee.directPhone = this.createNewEmployeeForm.controls['directPhone'].value;
      employee.email = this.createNewEmployeeForm.controls['email'].value;
      employee.fax = this.createNewEmployeeForm.controls['fax'].value;
      employee.title = this.createNewEmployeeForm.controls['title'].value;
      employee.status = this.createNewEmployeeForm.controls['status'].value;
      employee.cell = this.createNewEmployeeForm.controls['cell'].value;
      employee.home = this.createNewEmployeeForm.controls['home'].value;
      employee.homeFax = this.createNewEmployeeForm.controls['homeFax'].value;
      employee.homeEmail = this.createNewEmployeeForm.controls['homeEmail'].value;

    } else {

      const employee = new Employee (
        this.createNewEmployeeForm.controls['name'].value,
        this.createNewEmployeeForm.controls['profilePicUri'].value,
        this.createNewEmployeeForm.controls['directPhone'].value,
        this.createNewEmployeeForm.controls['email'].value,
        this.createNewEmployeeForm.controls['fax'].value,
        this.createNewEmployeeForm.controls['title'].value,
        this.createNewEmployeeForm.controls['status'].value,
        this.createNewEmployeeForm.controls['cell'].value,
        this.createNewEmployeeForm.controls['home'].value,
        this.createNewEmployeeForm.controls['homeFax'].value,
        this.createNewEmployeeForm.controls['homeEmail'].value,      
      );
  
      this.businessManagementService.employeeRepository.push(employee);
    }

    this.showCreateNewEmployee = false;
    this.currentEditID = -1;
    this.createNewEmployeeForm.reset();
  }

  editEmployee(index: number) {
    const employee = this.businessManagementService.employeeRepository[index];
    if (employee) {
      this.showCreateNewEmployee = true;
      this.currentEditID = index;

      this.createNewEmployeeForm.controls['name'].setValue(employee.name);
      this.createNewEmployeeForm.controls['profilePicUri'].setValue(employee.profilePicUri);
      this.createNewEmployeeForm.controls['directPhone'].setValue(employee.directPhone);
      this.createNewEmployeeForm.controls['email'].setValue(employee.email);
      this.createNewEmployeeForm.controls['fax'].setValue(employee.fax);
      this.createNewEmployeeForm.controls['title'].setValue(employee.title);
      this.createNewEmployeeForm.controls['status'].setValue(employee.status);
      this.createNewEmployeeForm.controls['cell'].setValue(employee.cell);
      this.createNewEmployeeForm.controls['home'].setValue(employee.home);
      this.createNewEmployeeForm.controls['homeFax'].setValue(employee.homeFax);
      this.createNewEmployeeForm.controls['homeEmail'].setValue(employee.homeFax);
    }
  }

  deleteEmployee(index: number) {
    this.businessManagementService.employeeRepository.splice(index, 1);
  }

}
