import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public data: string = '0';
  public history: string = '';

  public calculate(): void {
    try {
      this.history = this.data;
      const result = new Function('return ' + this.data)();
      this.data = result.toString();
    } catch (error) {
      this.data = 'Error';
    }
  }

  public clear(): void {
    this.data = '0';
    this.history = '';
  }

  public delete(): void {
    this.data = this.data.slice(0, -1);
  }

  public Expression(value: string): void {
    if (this.data === '0') {
      this.data = value;
    } else {
      this.data += value;
    }
  }
} 
