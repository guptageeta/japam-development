import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountDiaryPage } from './count-diary.page';

const routes: Routes = [
  {
    path: '',
    component: CountDiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountDiaryPageRoutingModule {}
