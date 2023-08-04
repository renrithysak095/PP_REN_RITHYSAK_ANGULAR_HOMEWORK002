import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './layout/parent/parent.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { LeftSideBarComponent } from './layout/left-side-bar/left-side-bar.component';
import { SortAZPipe } from './layout/pipes/sort-az.pipe';
import { CustomDirectiveDirective } from './layout/directive/custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    RightSidebarComponent,
    LeftSideBarComponent,
    SortAZPipe,
    CustomDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
