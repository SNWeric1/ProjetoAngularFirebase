import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoPage } from './projeto.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoPageRoutingModule {}
