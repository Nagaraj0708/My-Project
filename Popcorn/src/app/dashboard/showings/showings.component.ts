import { Component } from '@angular/core';
import { CallService } from '../call.service';
import { datagridmodel } from '../listview/view.model';

@Component({
  selector: 'app-showings',
  templateUrl: './showings.component.html',
  styleUrls: ['./showings.component.css']
})
export class ShowingsComponent {
  reference:datagridmodel[];
  iscartVisible: boolean = false;

  togglecart(): void {
    this.iscartVisible = !this.iscartVisible;
  }
  constructor(private callservice:CallService) {
    this.reference=this.callservice.listviewdataValue;
   }

  new:any = 0;
  new1:any = 0;
  new2:any = 0;

  add:any = 0;
  add1:any = 0;
  add2:any = 0;
  add3:any = 0;

  count: number = 0;

  VA() {
    if (this.new > 0) {
      this.new--;
    }
    const existingItemIndex = this.reference.findIndex(item => item.id == "sp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity--;
      this.reference[existingItemIndex].price -= this.reference[existingItemIndex].pricePerUnit;
      if (this.reference[existingItemIndex].quantity < 1) {
        this.reference.splice(existingItemIndex, 1);
      }
    }
  
  }
  
  VA1() {
    if (this.new >= 0) {
      this.new++;
    }
    const existingItemIndex = this.reference.findIndex(item => item.id == "sp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity++;
      this.reference[existingItemIndex].price += this.reference[existingItemIndex].pricePerUnit;
    } else {
      let mergedData = new datagridmodel({});
      mergedData.id = "sp";
      mergedData.products = "Small Popcorn";
      mergedData.quantity = 1;
      mergedData.price = 80;
      mergedData.pricePerUnit = 80;
      this.reference.push(mergedData);
      this.callservice.setlistviewdataValue(this.reference);
    }
  }
  VB(){
    if (this.new1 > 0) {
      this.new1--;
    }
    const existingItemIndex = this.reference.findIndex(item => item.id == "rp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity--;
      this.reference[existingItemIndex].price -= this.reference[existingItemIndex].pricePerUnit;
      if (this.reference[existingItemIndex].quantity < 1) {
        this.reference.splice(existingItemIndex, 1);
      }
    }
  
    }
    
    VB1(){
      if (this.new1 >= 0) {
        this.new1++;
    }
    const existingItemIndex = this.reference.findIndex(item => item.id == "rp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity++;
      this.reference[existingItemIndex].price += this.reference[existingItemIndex].pricePerUnit;
    } else {
      let mergedData = new datagridmodel({});
      mergedData.id = "rp";
      mergedData.products = "Regular Popcorn";
      mergedData.quantity = 1;
      mergedData.price = 120;
      mergedData.pricePerUnit = 120;
      this.reference.push(mergedData);
      this.callservice.setlistviewdataValue(this.reference);
    }
  }
    VC(){
      if (this.new2 > 0) {
        this.new2--;
      }
    const existingItemIndex = this.reference.findIndex(item => item.id == "lp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity--;
      this.reference[existingItemIndex].price -= this.reference[existingItemIndex].pricePerUnit;
      if (this.reference[existingItemIndex].quantity < 1) {
        this.reference.splice(existingItemIndex, 1);
      }
    }
  
      
      }
      VC1(){
        if (this.new2 >= 0) {
          this.new2++;
        }
    const existingItemIndex = this.reference.findIndex(item => item.id == "lp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity++;
      this.reference[existingItemIndex].price += this.reference[existingItemIndex].pricePerUnit;
    } else {
      let mergedData = new datagridmodel({});
      mergedData.id = "lp";
      mergedData.products = "Large Popcorn";
      mergedData.quantity = 1;
      mergedData.price = 150;
      mergedData.pricePerUnit = 150;
      this.reference.push(mergedData);
      this.callservice.setlistviewdataValue(this.reference);
    }
      }

TA(){
  if (this.add > 0) {
    this.add--;
  }
    const existingItemIndex = this.reference.findIndex(item => item.id == "cp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity--;
      this.reference[existingItemIndex].price -= this.reference[existingItemIndex].pricePerUnit;
      if (this.reference[existingItemIndex].quantity < 1) {
        this.reference.splice(existingItemIndex, 1);
      }
    }
  
  
  }
TA1(){
  if (this.add >= 0) {
    this.add++;
  }
  const existingItemIndex = this.reference.findIndex(item => item.id == "cp");
  if (existingItemIndex !== -1) {
    this.reference[existingItemIndex].quantity++;
    this.reference[existingItemIndex].price += this.reference[existingItemIndex].pricePerUnit;
  } else {
    let mergedData = new datagridmodel({});
    mergedData.id = "cp";
    mergedData.products = "Cheese Powder";
    mergedData.quantity = 1;
    mergedData.price = 10;
    mergedData.pricePerUnit = 10;
    this.reference.push(mergedData);
    this.callservice.setlistviewdataValue(this.reference);
  }
  }
TB(){
  if (this.add1 > 0) {
    this.add1--;
  }
    const existingItemIndex = this.reference.findIndex(item => item.id == "gp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity--;
      this.reference[existingItemIndex].price -= this.reference[existingItemIndex].pricePerUnit;
      if (this.reference[existingItemIndex].quantity < 1) {
        this.reference.splice(existingItemIndex, 1);
      }
    }
  
    }
TB1(){
  if (this.add1 >= 0) {
    this.add1++;
  }
  const existingItemIndex = this.reference.findIndex(item => item.id == "gp");
  if (existingItemIndex !== -1) {
    this.reference[existingItemIndex].quantity++;
    this.reference[existingItemIndex].price += this.reference[existingItemIndex].pricePerUnit;
  } else {
    let mergedData = new datagridmodel({});
    mergedData.id = "gp";
    mergedData.products = "Garlic Powder";
    mergedData.quantity = 1;
    mergedData.price = 10;
    mergedData.pricePerUnit = 10;
    this.reference.push(mergedData);
    this.callservice.setlistviewdataValue(this.reference);
  }
}
TC(){
  if (this.add2 > 0) {
    this.add2--;
  }
    const existingItemIndex = this.reference.findIndex(item => item.id == "hp");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity--;
      this.reference[existingItemIndex].price -= this.reference[existingItemIndex].pricePerUnit;
      if (this.reference[existingItemIndex].quantity < 1) {
        this.reference.splice(existingItemIndex, 1);
      }
    }
  
}
TC1(){
  if (this.add2 >= 0) {
    this.add2++;
  }
  const existingItemIndex = this.reference.findIndex(item => item.id == "hp");
  if (existingItemIndex !== -1) {
    this.reference[existingItemIndex].quantity++;
    this.reference[existingItemIndex].price += this.reference[existingItemIndex].pricePerUnit;
  } else {
    let mergedData = new datagridmodel({});
    mergedData.id = "hp";
    mergedData.products = "Hot Spice Powder";
    mergedData.quantity = 1;
    mergedData.price = 10;
    mergedData.pricePerUnit = 10;
    this.reference.push(mergedData);
    this.callservice.setlistviewdataValue(this.reference);
  }
}     
TD(){
  if (this.add3 > 0) {
    this.add3--;
  }
    const existingItemIndex = this.reference.findIndex(item => item.id == "bt");
    if (existingItemIndex !== -1) {
      this.reference[existingItemIndex].quantity--;
      this.reference[existingItemIndex].price -= this.reference[existingItemIndex].pricePerUnit;
      if (this.reference[existingItemIndex].quantity < 1) {
        this.reference.splice(existingItemIndex, 1);
      }
    }
  
}
TD1(){
  if (this.add3 >= 0) {
    this.add3++;
  }
  const existingItemIndex = this.reference.findIndex(item => item.id == "bt");
  if (existingItemIndex !== -1) {
    this.reference[existingItemIndex].quantity++;
    this.reference[existingItemIndex].price += this.reference[existingItemIndex].pricePerUnit;
  } else {
    let mergedData = new datagridmodel({});
    mergedData.id = "bt";
    mergedData.products = "Butter ";
    mergedData.quantity = 1;
    mergedData.price = 20;
    mergedData.pricePerUnit = 20;
    this.reference.push(mergedData);
    this.callservice.setlistviewdataValue(this.reference);
  }
}     
getTotalQuantity(): number {
  return this.reference.reduce((total, item) => total + item.quantity, 0);
}

}
