import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarncPage } from './selecionarnc.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarncPageRoutingModule {}
