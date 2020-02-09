import { Component, OnInit } from '@angular/core';
import { BusinessManagementService } from '../Shared/Services/business-management.service';
import { faPlus, IconDefinition, faEdit } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Projects } from '../Shared/Models/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  /** font awesom icons */
  faPlus: IconDefinition = faPlus;
  faEdit: IconDefinition = faEdit;
  faClose: IconDefinition = faWindowClose;
  /** form controls */
  createProjectForm: FormGroup;
  showCreateProject = false;
  currentEditID = -1;

  constructor(
    public businessManagementService: BusinessManagementService
  ) {
    this.createProjectForm = this.createFormControl()
  }

  ngOnInit() {

  }

  /** create reactive Form controls */
  private createFormControl() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required])
    });
  }

  /**
   * toggles CreateNewEmployee form
   */
  showCreateNewForm() {
    this.showCreateProject = !this.showCreateProject;
    if (!this.showCreateProject) {
      this.currentEditID = -1;
      this.createProjectForm.reset();
    }
  }
  /**
   * creates new empoyee
   */
  createNewProject() {
    if (this.currentEditID !== -1) {
      const project = this.businessManagementService.projectRepository[this.currentEditID];

      project.name = this.createProjectForm.controls['name'].value;
      project.date = this.createProjectForm.controls['date'].value;
      project.contact = this.createProjectForm.controls['contact'].value;

    } else {

      const project = new Projects (
        this.createProjectForm.controls['name'].value,
        this.createProjectForm.controls['date'].value,
        this.createProjectForm.controls['contact'].value     
      );
  
      this.businessManagementService.projectRepository.push(project);
    }

    this.showCreateProject = false;
    this.currentEditID = -1;
    this.createProjectForm.reset();
  }

  editProject(index: number) {
    const project = this.businessManagementService.projectRepository[index];
    if (project) {
      this.showCreateProject = true;
      this.currentEditID = index;

      this.createProjectForm.controls['name'].setValue(project.name);
      this.createProjectForm.controls['date'].setValue(project.date);
      this.createProjectForm.controls['contact'].setValue(project.contact);
    }
  }

  deleteProject(index: number) {
    this.businessManagementService.projectRepository.splice(index, 1);
  }
}
