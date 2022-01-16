import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialpractice';

  constructor(private data : DataService) { }

 actionwishList(){
    this.data.itemAddedWish();
  }

  actioncartitem(){     
    this.data.itemAddedCart();
  }

  actionremoved(){
    this.data.itemRemovedWish();
  }

  actionclearWish(){
    this.data.wishClear();
  }

  actionincreasecartItem(){
    this.data.itemIncCart();
  }

  actiondecCartItem(){
    this.data.itemDecCart();
  }

  actioncartItemdelete(){
    this.data.productDeleted();
  }

  actionclearCart(){
    this.data.cartClear();
  }

  actionplaceOrder(){
    this.data.orderPlace();
  }
}
