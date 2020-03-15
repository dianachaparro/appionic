import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevancPage } from './nuevanc.page';

const routes: Routes = [
  {
    path: '',
    component: NuevancPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevancPageRoutingModule {}
