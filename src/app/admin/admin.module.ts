import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AdminRouterModule } from "./admin-router.module";

import {  AdminComponent,
          AddComponent,
          EditComponent,
          ListComponent
        } from "./components/index.components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRouterModule
  ],
  declarations: [
    AdminComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  exports: [
    AdminComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  providers: []
})
export class AdminModule { }
