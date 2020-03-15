import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevancPageRoutingModule } from './nuevanc-routing.module';

import { NuevancPage } from './nuevanc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevancPageRoutingModule
  ],
  declarations: [NuevancPage]
})
export class NuevancPageModule {}
