import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { datagridmodel } from '../listview/view.model';
import { CallService } from '../call.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Output() close = new EventEmitter<void>();
  isVisible: boolean = true;
  reference!:datagridmodel[];
  isorderdetailsVisible: boolean = false;

  placeorder(): void {
    this.isorderdetailsVisible = !this.isorderdetailsVisible;
  }
  constructor(private callservice:CallService,private elRef: ElementRef, private renderer: Renderer2,) {
    this.reference=this.callservice.listviewdataValue;
  }
  getTotalPrice(): number {
    return this.reference.reduce((total, item) => total + item.price, 0);
  }
  subtotal(): number{
    return this.getTotalPrice();
  }
  calculateGST(): number {
    const gst = this.getTotalPrice() * 0.18;
    return parseFloat(gst.toFixed(2));

  }
  OverallTotal(): number {
    return this.subtotal() + this.calculateGST();
  }

  onContentClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  onOverlayClick(event: MouseEvent): void {
    const isInsideContent = this.elRef.nativeElement.contains(event.target);
    if (isInsideContent) {
      event.preventDefault(); 
      event.stopPropagation();
    }
  }

  edit(){
    this.isVisible = false;
    this.close.emit();
  }

}


