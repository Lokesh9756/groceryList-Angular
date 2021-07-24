import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: "",
    component: ItemListComponent
  },
  {
    path: "item/add/:id",
    component: EditComponent
  },
  {
    path: "item/edit/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
