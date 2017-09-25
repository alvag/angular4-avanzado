import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "../guards/admin.guard";

import {  AdminComponent,
          AddComponent,
          EditComponent,
          ListComponent
        } from "./components/index.components";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {path: '', component: ListComponent},
      {path: 'listado', component: ListComponent},
      {path: 'crear', component: AddComponent},
      {path: 'editar', component: EditComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AdminRouterModule { }
