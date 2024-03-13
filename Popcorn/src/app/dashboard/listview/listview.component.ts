import { Component } from '@angular/core';
import { CallService } from '../call.service';
import { datagridmodel } from './view.model';



@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent {
  isCompleted: boolean = false;
  reference:datagridmodel[];

  constructor(private callservice:CallService) {
    this.reference=this.callservice.listviewdataValue;
  }
   getTotalPrice(): number {
    return this.reference.reduce((total, item) => total + item.price, 0);
  }

  onComplete() {
    this.isCompleted = true;
  }
}