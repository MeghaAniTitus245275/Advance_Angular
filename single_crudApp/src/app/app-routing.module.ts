import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:'delete',component:DeleteComponent},
{path:'create',component:CreateComponent},
{path:'retieve',component:RetrieveComponent},
{path:'', component:RetrieveComponent},
{path: 'update/:id',component: UpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
