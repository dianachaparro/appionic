import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarNoConformidadPageRoutingModule } from './editar-no-conformidad-routing.module';

import { EditarNoConformidadPage } from './editar-no-conformidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarNoConformidadPageRoutingModule
  ],
  declarations: [EditarNoConformidadPage]
})
export class EditarNoConformidadPageModule {}
