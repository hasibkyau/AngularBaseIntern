import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInTouchRoutingModule } from './get-in-touch-routing.module';
import { GetInTouchComponent } from './get-in-touch.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { HeaderModule } from 'src/app/core/header/header.module';


@NgModule({
  declarations: [
    GetInTouchComponent,
    TopBannerComponent
  ],
  imports: [
    CommonModule,
    GetInTouchRoutingModule,
    HeaderModule
  ]
})
export class GetInTouchModule { }
