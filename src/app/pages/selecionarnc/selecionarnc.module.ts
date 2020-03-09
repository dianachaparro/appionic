import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarncPageRoutingModule } from './selecionarnc-routing.module';

import { SelecionarncPage } from './selecionarnc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarncPageRoutingModule
  ],
  declarations: [SelecionarncPage]
})
export class SelecionarncPageModule {}
