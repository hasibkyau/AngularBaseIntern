import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() item: any = null;
  @Input() name: any = null;
  @Output() passDataEvent = new EventEmitter();

  childLike: number = 0;

  onLikeCount(){
    console.log('liked: ', this.item.name);
    this.childLike += 1;
    this.passDataEvent.emit("anything");
  }

}
