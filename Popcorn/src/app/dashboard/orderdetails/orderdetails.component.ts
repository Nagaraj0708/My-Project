import { Component, Input, OnInit } from '@angular/core';
import { datagridmodel } from '../listview/view.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  @Input() cartItems: datagridmodel[] = [];
  isVisible: boolean = true;
  elRef: any;

  constructor(private router: Router,private location: Location) { }

  ngOnInit(): void {
  }

  subtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  calculateGST(): number {
    const gst = this.subtotal() * 0.18;
    return parseFloat(gst.toFixed(2));
  }

  overallTotal(): number {
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
  returnHome(): void {
    this.router.navigate(['/dashboard']).then(() => {
      this.location.replaceState('/dashboard');
      window.location.reload();
    });
  }
}