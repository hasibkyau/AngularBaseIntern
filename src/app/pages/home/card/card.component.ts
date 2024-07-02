import { Component } from '@angular/core';
import { PRODUCTS_DB } from 'src/app/core/db/products.db';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  items: any[] = PRODUCTS_DB;
  totalLike: number = 0;

  ngOnInit(){
    console.log(this.items)
    this.modifyArray();
    console.log(this.items);
    
  }

  onLikeClicked(event:any){
    console.log('Card component: ',event);
    this.totalLike += 1;
    
  }


  modifyArray(){
    this.items = this.items.map(m => {
      return{
        ...m,
        ...{
          actualPrice: m.Oldprice - m.Newprice,
          pet: 'Cat'
        }
      }
      
    })
  }


  

}
