import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {path:'Home',component:RetrieveComponent},
  {path:'Update',component:UpdateComponent},
  {path:'Delete',component:DeleteComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
