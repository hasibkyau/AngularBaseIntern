import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/core/header/header.module';
import { ProductCardModule } from 'src/app/shared/components/product-card/product-card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/materials/materials.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // FooterModule
    HeaderModule,
    ProductCardModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class HomeModule { }
