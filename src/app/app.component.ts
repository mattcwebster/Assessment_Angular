import { Component, OnInit } from '@angular/core';
import { BusinessManagementService } from './Shared/Services/business-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Assessment';

  constructor(
    private businessManagementService: BusinessManagementService
  ) { }

  ngOnInit() {
    this.businessManagementService.generateStaticData();
  }

}
