import {enableProdMode} from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { TopComponent } from './Components/top.component';
import { LeftComponent } from './Components/left.component';
import { CenterComponent } from './Components/center.component';
import { ProjectComponent } from './Components/LeftBar/project.component';
import { ResourceComponent } from './Components/LeftBar/resource.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { serviceForRoute } from './Services/SharedServices.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { ProjectNewComponent } from './Components/CenterComponents/ProjectCenterComponents/project.new.component';
import { ProjectSelectedComponent } from './Components/CenterComponents/ProjectCenterComponents/project.selected.component';
import { ProjectEventNewComponent } from './Components/CenterComponents/ProjectCenterComponents/project.event.new.component';
import {
  MdAutocompleteModule,
   MdInputModule,
   MdNativeDateModule,
   MdTabsModule,
   MdDatepickerModule

} from '@angular/material';
import {HttpModule} from '@angular/http';
//import {CdkTableModule} from '@angular/cdk';
import { CreateprojectsComponent } from './Components/createprojects/createprojects.component';
//  import { DateTimePickerModule } from 'ng-pick-datetime';
@NgModule({

  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
        //CdkTableModule,
    MdAutocompleteModule,
     MdInputModule,
     MdNativeDateModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    MdTabsModule,
    CollapsibleModule,
    MdDatepickerModule
  ],

  declarations: [AppComponent,TopComponent,LeftComponent,CenterComponent,ProjectComponent,ResourceComponent,ProjectNewComponent, CreateprojectsComponent,
  ProjectSelectedComponent,ProjectEventNewComponent],
  bootstrap: [AppComponent],
  providers: [serviceForRoute]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */