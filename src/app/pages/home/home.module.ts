import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderModule } from 'src/app/core/header/header.module';
import { ProductCardModule } from 'src/app/shared/components/product-card/product-card.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/materials/materials.module';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardComponent,
    ButtonComponent,
    NewArrivalsComponent,
    AddProductComponent,
    // FooterComponent
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
