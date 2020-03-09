import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarNoConformidadPage } from './editar-no-conformidad.page';

const routes: Routes = [
  {
    path: '',
    component: EditarNoConformidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarNoConformidadPageRoutingModule {}
