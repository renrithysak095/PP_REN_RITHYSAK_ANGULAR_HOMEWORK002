import { Component, Input , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent{ 

  // objectFromLeftSideBar:Array<any> = [{
  //   subjectName: 'Angular',
  //   description: `Angular is an open framework and
  // platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
  //   thumbnail: '../../../assets/images/angular.png',
  // }];

  @Input() dataFromLeftSideBar:Array<any> = [];

}
