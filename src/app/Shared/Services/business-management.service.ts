import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { Projects } from '../Models/projects';

@Injectable({
  providedIn: 'root'
})
export class BusinessManagementService {

  /** holds employees list */
  employeeRepository: Employee[];
  projectRepository: Projects[];
  constructor() { }

  generateStaticData(): void {
    this.employeeRepository = [
      new Employee('John Smith', 'https://avatars.githubusercontent.com/u/1','612-555-1234', 'johns@gtn.com', '612-555-4321 ', 'AIA'),
      new Employee('Monique Unique', 'https://avatars.githubusercontent.com/u/2', '612-555-1235', 'moniqueu@gtn.com', '612-555-5321','CIC', 'Obsolete'),
      new Employee('Elmer Dickett', 'https://avatars.githubusercontent.com/u/3','612-555-1236','elmerd@gtn.com', '', '', 'Active', '612-555-6321', '612-555-0102'),
      new Employee('John Doe', 'https://avatars.githubusercontent.com/u/4', '612-555-1237', 'johnd@gtn.com', '612-555-7321', '', 'Active', '612-555-9900'),
      new Employee('Miles Close', 'https://avatars.githubusercontent.com/u/6', '612-555-1239', 'milesc@gtn.com', '', 'CPCU', 'Active', '', '', '', 'milesc@gmail.com'),
      new Employee('Monique Unique', 'https://avatars.githubusercontent.com/u/2', '612-555-1235', 'moniqueu@gtn.com', '612-555-5321', 'CIC', 'Active', '612-555-8800'),
      new Employee('Will DePart', 'https://avatars.githubusercontent.com/u/7', '612-555-5500', 'willd@gtn.com', '612-555-0055', '', 'Obsolete', '612-555-7700'),
      new Employee('Susan Knutson', 'https://avatars.githubusercontent.com/u/20', '612-555-6789', 'susank@gtn.com', '612-555-9876', '', 'Active', '612-555-6600'),
      new Employee('Michelle Borowicz', 'https://avatars.githubusercontent.com/u/21', '612-555-3456', 'michelleb@gtn.com', '612-555-6543', 'CIC', 'Active', '612-555-1100', '', '', ' fritzo@gmail.com'),
      new Employee('Joseph Webb', 'https://avatars.githubusercontent.com/u/5', '612-555-1238', 'josephw@gtn.com', '612-555-8321', 'CPCU', 'Active', '', '612-555-5678', '612-555-8765', ' jwebb@gmail.com'),         
    ];

    this.projectRepository = [
      new Projects('Alan Parsons Project', '1/23/1970', 'Joseph Webb '),
      new Projects('Take Out the Trash', '11/30/2000', 'John Doe'),
      new Projects('G2002.0100', '2/2/2002', 'Susan Knutson'),
      new Projects('G2003.0100', '3/3/2003', 'Miles Close'),
      new Projects('G2004.0100', '1/23/1970', 'Joseph Webb '),
      new Projects('Alan Parsons Project', '4/4/2004', 'Michelle Borowicz'),
      new Projects('G2005.0100', '5/5/2005', 'Will DePart'),
      new Projects('S2000.0200', '6/6/2000', 'Elmer Dickett'),
    ]
  }

  getEmployeeNameWithTitle(index: number): string {
    let name_title = this.employeeRepository[index].name;
    if (this.employeeRepository[index].title) {
      name_title = name_title + ', ' + this.employeeRepository[index].title;
    }
    return name_title;
  }

}
