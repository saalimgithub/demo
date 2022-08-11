import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  msg: string = ""
  interpolation: string = "this is Strin Interpolation";

  enable: boolean = false
  status1 = "status online"
  status2 = "status offline"



  addtocart(data: any) {
    alert(data.target.value + " added in the cart")
    this.msg = data.target.value + " added in the cart";
    this.enable = !this.enable
  }

  //ngModel = [propertybinding] +  (eventbinding)
  enables: boolean = false;

  clicks() {
    this.enables = !this.enables;
  }

  // switchcase
  selectedproduct: string;
  products(data: any) {
    alert(data.target.value)
    this.selectedproduct = data.target.value;
  }
  groceries = [
    {
      img: '../../assets/lays.jpg',
      name: 'daal',
      price: '230'
    },
    {
      img: '../../assets/lays.jpg',
      name: 'oil',
      price: '230'
    }
  ]

  users: any = []

  addproducts(name: any, img: any, price: any) {
    this.groceries.push({
      name: name.value,
      img: img.value,
      price: price.value
    })
    name.value = ''
    img.value = ''
    price.value = ''
  }

  delete(data:any){
  this.groceries.splice(data,1)
  }

}
