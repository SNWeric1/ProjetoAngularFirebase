import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProjetoPage } from './projeto.page';

import { ProjetoPageRoutingModule } from './projeto-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetoPageRoutingModule
  ],
  declarations: [ProjetoPage]
})
export class ProjetoPageModule {}
