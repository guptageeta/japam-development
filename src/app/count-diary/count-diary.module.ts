import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountDiaryPageRoutingModule } from './count-diary-routing.module';

import { CountDiaryPage } from './count-diary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountDiaryPageRoutingModule
  ],
  declarations: [CountDiaryPage]
})
export class CountDiaryPageModule {}
