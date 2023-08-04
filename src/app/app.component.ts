import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PP_REN_RITHYSAK_ANGULAR_HOMEWORK001';
  isLogin:boolean = false
  getFromLogoutBtn(isLogin:boolean): void{
    this.isLogin = isLogin
  }
  navigator(){
    this.isLogin = true
  }

}
