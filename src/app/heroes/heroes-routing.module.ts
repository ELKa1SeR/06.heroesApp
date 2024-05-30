import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from '../auth/pages/layout-pages/layout-pages.component';

// localhost: 4200/heroes
const routes: Routes= [
  {path: '', component: LayoutPagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
