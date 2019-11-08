import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<any> = [];

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }

  async ngOnInit() {
  }

  loadSavedItems() {
    this.orders = [{
      "pid": "1",
      "image": "assets/sm_android.jpeg",
      "description": "Android",
      "price": 150.00,
      "quantity": 2
    }, {
      "pid": "2",
      "image": "assets/sm_iphone.jpeg",
      "description": "IPhone",
      "price": 200.00,
      "quantity": 1
    }, {
      "pid": "3",
      "image": "assets/sm_windows.jpeg",
      "description": "Windows Phone",
      "price": 110.00,
      "quantity": 2
    }];
  }

  clear() {
    this.orders = [{
      "pid": null,
      "image": "assets/sm_android.jpeg",
      "description": null,
      "price": null,
      "quantity": null
    }, {
      "pid": null,
      "image": "assets/sm_iphone.jpeg",
      "description": null,
      "price": null,
      "quantity": null
    }, {
      "pid": null,
      "image": "assets/sm_windows.jpeg",
      "description": null,
      "price": null,
      "quantity": null
    }];
  }

  calculateTotal() {

  }

  addAndroid() {
    this.orders = [{
    "pid": "1",
    "image": "assets/sm_android.jpeg",
    "description": "Android",
    "price": 150.00,
    "quantity": 1
  }];
  }

  addIPhone() {
    this.orders = [{
    "pid": "2",
    "image": "assets/sm_iphone.jpeg",
    "description": "IPhone",
    "price": 200.00,
    "quantity": 1
  }];
  }

  addWindows() {
    this.orders = [{
  "pid": "3",
  "image": "assets/sm_windows.jpeg",
  "description": "Windows Phone",
  "price": 110.00,
  "quantity": 2
}];
}


}
