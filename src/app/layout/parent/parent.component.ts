import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  @Output() isLogin = new EventEmitter<boolean>();
  storeData:Array<any> = [{
    subjectName: 'Angular',
    description: `Angular is an open framework and
  platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
    thumbnail: '../../../assets/images/angular.png',
  }];
  navigator(){
    this.isLogin.emit(false)
  }
  getDataFromLeftSideBar(data:Array<any>){
    const convertToString = JSON.stringify(data)
    const convertToObject = JSON.parse(convertToString)
    this.storeData = convertToObject
  }

}
